
pipeline{
    agent any
    {
        stage('Clone git repository'){
            steps{
                git 'https://github.com/taili87/cypress-e2e.git'
            }
        }

        stage('Install Dependencies'){
            steps{
                bat 'npm install'
            }
        }

        stages('Run Tests'){
            steps{
                bat 'npm test'
            }
        }

        stage('Publis HTML Reports'){
            steps{
                publishHTML([allowMissing: flase,
                             alwaysLinkToLastBuild:flase,
                             keepAll:false,
                             reportDir:'cypress/reports/html',
                             reportFiles: 'index.html',
                             reportName:'HTML Reports',
                             reportTitles: ''                             
                             ])
            }
        }
    }
}