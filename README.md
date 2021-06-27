# MusicFestivalAPI
Application that retrives data from an external API, transforms that data, and permits queries on that data through GraphQL. 
Can be used locally or deployed to AWS.
  
How do I run it locally  
Clone repo locally  
Run npm blahblah
Run blahblah
npm run start and open the 'GET' link to open GraphQL in browser.  
Sample query as follows:  
query recordLabels {  
  recordLabels{  
    label  
    bands{  
      name  
      festivals{  
        name  
      }     
    }  
  }  
}  
Can alter query to only return data required.

How do I test it  
npm run test will run the test suite.
blahblah gives test coverage reporting.

How do I deploy it  
To deploy to AWS you must make IAM serverless blahblah, link access/secret key etc,   
blahblahblah then run serverless deploy.


