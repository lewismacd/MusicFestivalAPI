# MusicFestivalAPI
Application that retrives data from an external API, transforms that data, and permits queries on that data through GraphQL. 
Can be used locally or deployed to AWS.
    
How do I run it locally  
Clone repo locally, install npm and all dependencies. 
Run 'npm run start' and open the 'GET' link to open GraphQL in browser.  
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
  
  
Testing:   
npm run test will run the test suite.
 



