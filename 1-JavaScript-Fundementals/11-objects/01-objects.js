/**************************
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma 

curly braces indicate ths is an OBJECT
*/

var netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };

    
    console.log(netflix.season1.seasonInfo.episodeInfo[7].episodeName);  //  <-- dot notation
    console.log(netflix.season1.seasonInfo.episodeInfo[4].episodeName);
    console.log(netflix.season1.seasonInfo.episodeInfo[10].episodeName);
    console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

    console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);
    console.log(netflix.season1.seasonInfo.episodeInfo[3]);

    console.log(netflix.season1.seasonInfo[7].episodeName);
    console.log()

    /// json ---> javascript object notation

    let spaceJam = {
        toonSquad: {
          human: 'Michael Jordan',
          rabbit1: 'Bugs Bunny',
          rabbit2: 'Lola Bunny',
          duck: 'Daffy Duck',
          tDevil: 'Tasmanian Devil',
          bird: 'Tweety',
          cat: 'Sylvester',
          pig: 'Porky Pig'
        },
        monstars: {
          0: 'Bupkus',
          1: 'Bang',
          2: 'Nawt',
          3: 'Pound',
          4: 'Blanko'
        },
        nbaPlayers: {
          phoenixSuns: 'Charles Barkley',
          newJerseyNets: 'Shawn Bradley',
          newYorkNicks: 'Patrick Ewing',
          charlotteHornets1: 'Larry Johnson',
          charlotteHornets2: 'Muggsy Bogues'
        }
      }

      
      // console.log(Object.keys(spaceJam.nbaPlayers)[0]) 
      // console.log(Object.keys(spaceJam.toonSquad).toString())
      console.log(Object.values(spaceJam.toonSquad)); 


      ///


      let garden = {
          vegetable: 'zucchini',
          flower: 'sun flower',
          fruit: 'grape',
          water: true,
          sun: true,
          size: 10
      };

      console.log(garden.vegetable);

      let x = 'vegetable';
      console.log(garden.x, garden[x]);

      let baking = {}
      baking['zucchini'] = 'better make some bread!';
      
      console.log(baking);

      //console.log(baking.garden.vegetable); // wont wor. mixing objects

      console.log(baking['zucchini'])



      let garden = {
        vegetable: 'zucchini',
        flower: 'sun flower',
        fruit: 'grape',
        water: true,
        sun: true,
        size: 10
    };


      let key = 'water';
      Object.keys(garden).forEach(g => {
    //^^ object keys garder ----> array
          if (key === g) {
              console.log(garden[key]);
          }
      });

