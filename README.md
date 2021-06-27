# MusicFestivalAPI
Application that retrives data from an external API, transforms that data, and permits queries on that data through GraphQL. 


## Installation

Clone github repo locally, cd to root of project directory, and run:

```bash
npm install
```

## Usage
  
Run the below, opening the GET endpoint (http://localhost:3000/graphql)

```bash
npm run start
```
  
Example GraphQL query:  
  
```bash
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
```

## Testing

Run the below to run the test suite:  
  
```bash
npm run test
```
  
And the below to include code coverage reporting:  
  
```bash
npm test -- --coverage
```
