 //let x = 10;s
        //console.log(x)
        document.getElementById('testParagraph').style.color = 'green';
        console.log(document.querySelectorAll('p.sampleClass')[0].innerText);
        let arr = document.querySelectorAll('p');
            for( a of arr){
                console.log(a.innerText);
            }

    document.getElementById('clickThisButton').addEventListener('click',(details) => {  //document.querySelectorAll('p.sampleClass')[0].innerHTML='<i>My text has changed </i>'

   details.target.style.backgroundColor = 'green';
    details.target.style.backgroundColor = 'blue';
    document.getElementById('clickThisButton').style.backgroundColor = "green";

                if(details.target.style.backgroundColor == 'red'){
                    details.target.style.backgroundColor = 'blue'
                } else {
                    details.target.style.backgroundColor = 'red'
                }


})

        document.getElementById('nameInput').addEventListener('keyup', (e) =>{
            console.log(e.target.value);
            document.getElementsByTagName('p')[1].innerText = `Heyeveryone say helllo to ${e.target.value}`;
        }) 


        ///fix this shit later  ugh......damnit  :(



// somehw look into array and pull from it.

if (e.target.value ==  '') {
    document.getElementsByTagName('p')[1].innerText = `nothing has been typed`
    } else {
 document.getElementsByTagName('p')[1].innerText = `everyone say hello to ${e.target.value}
    }