pipeline {
	agent any

   parameters {
		
			string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description:'Enter the scripts path that you want execute')
            choice(name:'BROWSER',choices: ['chrome', 'edge','firefox'], description: 'choise the browser where you want to tun test')
	}
	stages {
		stage('Clone Git Repo'){
				steps{
					git 'https://github.com/taili87/cypress-e2e.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npm test'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}