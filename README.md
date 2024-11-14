# Mark Farrell Groupon Excercise

## Server
This is an simple express server built in nodeJS, it parses the response from the Wikipedia API and sends and object of: 
`{
	title: string,
	href: string
}[]`

it is used with the main FE application here 
[github.com/markfarl/groupon_test](https://github.com/markfarl/groupon_test)

## Install

`yarn`
`yarn start`

## Docker file
This creates a docker image using the settings, a public example of this is hosted here https://hub.docker.com/r/markfarl84/groupon_serve
This image is hosted at a EC2 AWS instance on free tier account