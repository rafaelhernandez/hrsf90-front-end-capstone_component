pipeline {
  agent any
  stages {
    stage('Build react client') {
      environment {
        PATH = '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/local/mysql/bin:/Users/rafa/.rvm/bin:/Users/rafa/bin'
      }
      steps {
        sh 'npm run build'
      }
    }
  }
}