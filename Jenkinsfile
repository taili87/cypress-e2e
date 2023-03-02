pipeline {
	agent any 
	parameters {
		
			string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description:'Enter the scripts path that you want execute')
            choice(name:'BROWSER',choices: ['chrome', 'edge','firefox'], description: 'choise the browser where you want to tun test')
	}

		options{
			ansiColor('xterm')
		}

		stages{
			stage('Building'){
				steps{
					echo 'Building the Application'
				}
			}

		stage{
			stage('Deploying'){
				steps{
					echo 'Deploying  the Application'
				}
			}
			stage('Testing'){
				steps{
					bat 'npm install'
					bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'

				}
			}

			post{
				always {
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
				}
			}
		
		
	    }
	
    


}
