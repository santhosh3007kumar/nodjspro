pipeline {
    agent any

    environment {
        IMAGE_NAME = "santhosh3007/jsrepo"
        DOCKER_CREDS = credentials('dockerhub_cred')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/santhosh3007kumar/nodjspro.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                sh 'echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin'
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop nodejs-container || true
                docker rm nodejs-container || true
                docker run -d -p 3000:3000 --name nodejs-container $IMAGE_NAME
                '''
            }
        }
    }
}

