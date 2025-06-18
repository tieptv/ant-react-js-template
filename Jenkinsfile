currentBuild.displayName = "BNPL-Onboarding-gateway#"+currentBuild.number

def getEnvName(branchName) {
    switch(branchName) {
        case 'dev':
            return 'dev'
        case 'uat':
            return 'uat'
        case 'master':
            return 'prod'
        default:
            return 'dev'

    }
    return null
}

def getVersion() {
    def gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    def versionNumber;
    if (gitCommit == null) {
        versionNumber = env.BUILD_NUMBER;
    } else {
        versionNumber = gitCommit.take(8);
    }
    print 'build  versions...'
    print versionNumber
    return versionNumber
}

def getRegistry(envName) {
    switch(envName) {
        case 'dev':
            return '871857651720.dkr.ecr.ap-southeast-1.amazonaws.com/bnpl-onboarding-portal'
        case 'uat':
            return '871857651720.dkr.ecr.ap-southeast-1.amazonaws.com/bnpl-onboarding-portal'
        case 'prod':
            return '871857651720.dkr.ecr.ap-southeast-1.amazonaws.com/bnpl-onboarding-portal'
    }
    return null
}

def getRegistryCredential(envName) {
    switch(envName) {
        case 'dev':
            return 'aws-ecr-dev-credentials'
        case 'uat':
            return 'aws-ecr-uat-credentials'
        case 'prod':
            return 'aws-ecr-prod-credentials'
        default:
            return 'aws-ecr-dev-credentials'
    }
    return null
}

pipeline {
  agent {
    label 'slave01-jdk17'
  }

  environment{
    EMAIL_RECIPIENTS = 'quyhoa@lottefinance.vn'
    AWS_REGION = 'ap-southeast-1'
    ENV_NAME = getEnvName("${GIT_BRANCH.split("/")[1]}")
    REGISTRY = getRegistry("${ENV_NAME}")
    REGISTRY_CREDENTIAL = getRegistryCredential("${ENV_NAME}")
    IMAGE_TAG = getVersion().trim()
    DOCKER_BUILDKIT = 1
    HTTP_PROXY = 'http://10.252.17.65:3128'
    HTTPS_PROXY = 'http://10.252.17.65:3128'
    no_proxy = "lottefn.vn"
  }

  stages{
    stage('Building Image') {
      steps{
        script {
          dockerImage = docker.build("$REGISTRY:$IMAGE_TAG", "--build-arg BUILD_ENV=$ENV_NAME .")
          def IMAGE_ID = sh(script: "docker images | grep -E '^$REGISTRY.*$IMAGE_TAG' | head -1 | awk '{print \$3}'", returnStdout:true).trim()
          env.IMAGE_ID = IMAGE_ID
        }
      }
    }

    // stage('Qualys scaning') {
    //   steps{
    //      catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
    //          getImageVulnsFromQualys useGlobalConfig:true, imageIds: env.IMAGE_ID
    //      }
    //   }
    // }

    stage('Deploy Image') {
      steps{
          script{
            docker.withRegistry("https://" + REGISTRY, "ecr:${AWS_REGION}:" + REGISTRY_CREDENTIAL) {
                dockerImage.push()
            }
          }
      }
    }


    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi -f $REGISTRY:$IMAGE_TAG"
      }
    }
    stage('Update Manifest repository') {
      steps{
        script {
          sh '''
          git config --global credential.helper cache
          git config --global user.name "deployer"
          git config --global user.email deployer@lottefn.vn
          printenv
          '''
          checkout([
          $class: 'GitSCM',
          branches: [[name: '*/master']], extensions: [],
          userRemoteConfigs: [
            [
//              credentialsId: 'gitlab-bnpl.eks',
              credentialsId: 'sonlh1-PAT',
              url: 'https://sonlh1@gitlab.lottefn.vn/bnpl/k8s.manifest.git'
            ]
          ]
          ])
          sh '''
          rm -rf lib/ target/
          sed -i "s/\\s*tag:.*/  tag: '$IMAGE_TAG'/g" helm/applications/bnpl-onboarding-gateway-api/values-v1.0-$ENV_NAME.yaml
          git add helm/applications/bnpl-onboarding-gateway-api/values-v1.0-$ENV_NAME.yaml
          git diff-index --quiet HEAD || git commit -m "update image for bnpl-onboarding-gateway-api template"
          git push origin HEAD:master
          '''
        }
      }
    }
  }
  post {
    // Always runs. And it runs before any of the other post conditions.
    always {
        // Let's wipe out the workspace before we finish!
        deleteDir()
    }
    /*success {
      sendEmail("Successful");
    }
    failure {
      sendEmail("Failed");
    }*/
  }
  // The options directive is for configuration that applies to the whole job.
  options {
      // For example, we'd like to make sure we only keep 10 builds at a time, so
      // we don't fill up our storage!
      buildDiscarder(logRotator(numToKeepStr: '10'))

      // And we'd really like to be sure that this build doesn't hang forever, so
      // let's time it out after half an hour.
      timeout(time: 30, unit: 'MINUTES')
  }
}

