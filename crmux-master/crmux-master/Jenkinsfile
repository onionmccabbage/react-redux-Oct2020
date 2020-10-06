pipeline {

    agent any
    
    stages {
        stage('Dependencies') {
            steps {
                println 'Installing dependencies.'
                sh 'npm install'
                println 'All dependencies were installed-updated.'
            }
        }
        stage('Build') {
            steps {
                println 'Starting build.'
                sh 'npm run-script build'
                println 'Completed the build.'
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    try {                        
                        println 'Starting running unit tests.'
                        sh 'CI=true npm test a'
                        println 'Completed running unit tests.'
                    } catch (err) {
                        echo currentBuild.result
                    }
                }
            }  
        }
        stage('Delivery') {
            steps {
                fileOperations([fileCopyOperation(
                    excludes: '',
                    flattenFiles: false,
                    includes: 'build\\**',
                    targetLocation: "C:\\CRM\\UX"
                )])
            }
        }
        
    }
}
