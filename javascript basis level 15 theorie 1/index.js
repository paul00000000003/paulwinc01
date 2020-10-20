   /*
                                                       var titles = document.getElementsByClassName("title");
                                                       var ids = document.getElementsByTagName('li');

                                                       var titlesarr = Array.from(titles);
                                                       let i = 0;
                                                       for (i = 0; i < titlesarr.length; i++) {
                                                           console.log(titlesarr[i]);
                                                       }

                                                       var idsarr = Array.from(ids);
                                                       for (i = 0; i < idsarr.length; i++) {

                                                           console.log(idsarr[i]);
                                                       }
                                                       console.log("Hieronder obv forEach");
                                                       idsarr.forEach(function(item) { console.log(item); })

                                                       console.log('wrapper');
                                                       var wrap = document.querySelector('#wrapper');
                                                       console.log(wrap);

                                                       console.log("tweede titel");
                                                       var nieuwetag = document.querySelector('#book-list li:nth-child(2) .name');

                                                       console.log(nieuwetag);

                                                       console.log("Hieronder alle titels");

                                                       var boekentitels = document.querySelectorAll('#book-list li .name');
                                                       console.log(boekentitels);

                                                       var boeken = Array.from(boekentitels);
                                                       console.log("boekentitels " + boeken.length);
                                                       boeken.forEach(function(item) { console.log(item); });

                                                       console.log("Tweede keer");
                                                       Array.from(boeken).forEach(function(item) { console.log(item); });

                                                       

                                 let a = document.getElementById("book-list");
                                 console.log(a);
                                 console.log('the parent node is ' + a.parentNode);
                                 let b = a.parentNode;
                                 console.log(b);
                                 let c = a.parentNode.parentNode;
                                 console.log(c);
                                 let d = a.childNodes;
                                 console.log(d);
                                 console.log("voor de kinderen");
                                 let e = a.children;
                                 console.log(e);
                                 

                        var bookList = document.getElementById("book-list");
                        console.log(bookList.nextSibling);

                        bookList.previousElementSibling.querySelector('p').innerHTML += "</br>Too cool for you dudes";
                        */

   var h2 = document.querySelector("#book-list .title");
   h2.addEventListener('click', function(e) {
       console.log(e.target);
       console.log(e)
   });

   let dels = document.getElementsByClassName('delete');

   for (i = 0; i < dels.length; i++) {
       dels[i].addEventListener('click', function(e) {
           let regel = e.target.parentElement;
           let lijstje = regel.parentElement
           lijstje.removeChild(regel)
       });
   }