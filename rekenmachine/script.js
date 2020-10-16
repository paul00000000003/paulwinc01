

function getsomelement(value)
{ 
  var kar="";
  var el2=$('p#inhoudsom').text();
  var uitkomstwaarde=$('p#uitkomst').text();
  var vorigeuitkomst="";
   
  if (uitkomstwaarde.length > 11)
    { 
      kar=uitkomstwaarde.charAt(11);
      if ((value!="=") && ((kar=='+')||(kar=='-')||(kar=='1')||(kar=='2')||(kar=='3')||(kar=='4')||(kar=='5')||(kar=='6')||(kar=='7')||(kar=='8')||(kar=='9')))
        {if ((el2.length>7))  
           { 
             if ((value == '*')||(value=='/')||(value=='+')||(value=='-'))
               { 
                 for (i=11;i<uitkomstwaarde.length;i++)
                 vorigeuitkomst+=uitkomstwaarde.charAt(i);
               }
             else 
             { el2="Som : ";
             }
           }
         else 
         {el2="Som : ";
         }
       }
      else
      { if (value!='=')
          { 
            el2="Som : " 
            $('p#inhoudsom').text(el2);
          } 
      }
      if (value!="=")
        $('p#uitkomst').text("Uitkomst : ") 
    }
  else 
  {    
    if (value!='C')
      el2=$('p#inhoudsom').text()
  }
  
     
  
  if (value!='C')
    {
     if (vorigeuitkomst != "")
       { el2="Som : ";
         el2+=vorigeuitkomst;
       } 
     el2+=value;  
     $('p#inhoudsom').text(el2);
    }
 
  if (el2.length==7)
     $('p#msg').text(" ");

  
}

function getuitkomst()
{
      
   var sominhoud=$('p#inhoudsom').text(); 
   var teller2=0;
   var uitkomstnum=0;
    
   if (!(sominhoud.length<6))
   { var somelementen=getsomelementen(sominhoud); // vullen van array karakters op basis van string 
     var getallennum=[0];
     var operators=[""];
        
     var somelementencomp=checkhaakjes(somelementen); // uitwerking van de haakjes 
     somelementen=somelementencomp[0]; 
     error=somelementencomp[1];  
     
     kar=somelementen[0];
     if ((kar=="*")||kar=="/")
       error="eerste karakter mag niet gelijk zijn aan / of *";  
     if (error!="")
       {$('p#msg').text(error);
        $('p#uitkomst').text("Uitkomst : Niet berekenbaar ivm fout ");
       } 
     else
     {
       getallennum=[0];
       operators=[""];
       var uitkomstnum=0; 
        
       var vormgetallenresultaat=vormgetallen(somelementen); // slotverwerking getallen.  
       getallennum=vormgetallenresultaat[0];                 // vullen getallenarray slotverwerking
       error=vormgetallenresultaat[1];   
        
       operators=zoekoperators(somelementen);                //  vullen operatorsarray


       if (!(error.length==0))
         {
           $('p#uitkomst').text("Uitkomst : Niet berekenbaar ivm fout");  
           $('p#msg').text(error);   
         }
       else 
       { 
         uitkomstnumresultaat=getuitkomstgetal(getallennum,operators); // berekening resultaat
         uitkomstnum=uitkomstnumresultaat[0];
         error=uitkomstnumresultaat[1];
         if (error=="")
           {
            var uitkomststr=uitkomstnum.toString(); 
            var i=0; 
            uitkomststr=uitkomststr.replace(".",",");
                            
            $('p#uitkomst').text("Uitkomst : "+uitkomststr);  // weergave resultaat berekening 
           }
        else 
        {
          $('p#uitkomst').text("Uitkomst : Niet berekenbaar ivm fouten");
          $('p#msg').text(error); 
        }
       }
     
     }
   } 
   
  //if (e.preventDefault)
  //  e.preventDefault();
  //else e.returnValue="false";
  //if (event.stopPropagation)
  //  {
  //    event.stopPropagation(); 
  //  }
  //else event.cancelBubble=true;  
}

function clearvalues()
{
  $('p#uitkomst').text("Uitkomst :"); 
  $('p#msg').text(" "); 
  $('p#inhoudsom').text("Som : "); 

}

function haakjesverwerking(pos1,pos2,haakjesbronarr)
{var haakjesdoelarr=[""]; 
 somelementenhaakjes=[""];
 var i=0; 
 teller2=0;  
 for (i=pos1+1;i<pos2;i++)
 {
  somelementenhaakjes[teller2]=haakjesbronarr[i]; //vul array uit te werken haakjes 
  teller2++; 
 }
 
 teller2=0;
 for (i=0;i<pos1;i++)                             // vul array voor uit te werken openingshaakje 
 {if (haakjesbronarr[i]!="")
    { teller2+=1; 
      haakjesdoelarr[i]=haakjesbronarr[i];
    } 
 }
  
 getallennum=[0];
 operators=[""];
  
 var vormgetallenresultaat=vormgetallen(somelementenhaakjes); // vul getallen tussen de haakjes 
 getallennum=vormgetallenresultaat[0];
 error=vormgetallenresultaat[1];       

 operators=zoekoperators(somelementenhaakjes);               // vul operators tussen de haakjes 
 var getuitkomstresultaat=getuitkomstgetal(getallennum,operators); 
 var getalhaakjesverw=getuitkomstresultaat[0];                   //uitkomst getal tussen de haakjes 
 error=getuitkomstresultaat[1];  
 
 for (i=0;i<getalhaakjesverw.toString().length;i++)
 { 
   haakjesdoelarr[teller2]=getalhaakjesverw.toString().charAt(i);
   teller2+=1;
 }
 
if (pos2<haakjesbronarr.length)                               // verwerk string na te verwerken sluithaakje 
  { for (i=pos2+1;i<(haakjesbronarr.length);i++)
    {if (haakjesbronarr[i]!="") 
       haakjesdoelarr[teller2]=haakjesbronarr[i];
     teller2+=1;  
    }
  } 

haakjesresult=[haakjesdoelarr,error];
return haakjesresult;
}

function checkhaakjes(somelements)
{    
     var somelementsresult=[""];
     error="";    
     openingshaakjes=[0];
     var aantalopeningshaakjes=0;
     geslotenhaakjes=[0];
     var aantalgeslotenhaakjes=0;    
     var poshaakje=0;
     var uitkomstnum=0;
     var somelementenhaakjes=[""];
     var teller2=0; 
     var somhaakjestot=0;
     var pos1=0;
     var pos2=0;  
     var posoud=0;
     getallennum =[0];
     operators   =[""];
     
     while ((somelements[0] =="(") && (somelements[somelements.length-1]==")"))
     { teller2=0; 
       for (i=0;i<somelements.length;i++)
       {
         if (!((i==0)||(i==somelements.length-1))) 
           {
             somelementenhaakjes[teller2]=somelements[i];
             teller2++; 
           }
       }
       somelements=somelementenhaakjes;
       somelementenhaakjes=[""]; 
     } 
     for (i=0;i<somelements.length;i++)
     { if (i>=1) 
         {kar=somelements[i];
          var kar2=somelements[i-1]; 
          if ((kar==("/")||(kar=="*")||(kar=="+")||(kar=="-"))&&((kar2=="/")||(kar2=="*")||(kar2=="+")||(kar2=="-")))
             {error="twee operators achter elkaar wordt niet toegestaan";}
         }
       switch (somelements[i])
       {
         case '(':openingshaakjes[aantalopeningshaakjes]=i+1; 
                  aantalopeningshaakjes+=1;
                  break;
         case ')':geslotenhaakjes[aantalgeslotenhaakjes]=i+1; 
                  aantalgeslotenhaakjes+=1;
                  break;  
       }
     } 
     if (aantalopeningshaakjes!=aantalgeslotenhaakjes)
       {error="Aantal openingshaakjes ongelijk aantal sluitingshaakjes";
        somelementsresult=[""];
       }
     else
     {
       if ((openingshaakjes.length !=0) && openingshaakjes[0]!=0) 
       {  
          if (openingshaakjes.length!=geslotenhaakjes.length) 
             error="Aantal openingshaakjes ongelijk aantal sluithaakjes"; 
       }
       else 
       {
         if (geslotenhaakjes[0] !=0)  
           error="Aantal openingshaakjes ongelijk aantal sluithaakjes"; 
      
       }
       if (openingshaakjes[0]==0)
         {
           // Er zitten geen haakjes in de som //
           for (i=0;i<somelements.length;i++)
           somelementsresult[i]=somelements[i]; 
         }
       else
       { 
         if (openingshaakjes.length >2) 
           error="Max toegestaan aantal openingshaakjes=2";
         else
         { 
           for (i=0;i<somelements[openingshaakjes[0]];i++)
           {somelementsresult[i]=somelements[i];}
         
           if (openingshaakjes.length>1)
             {
        
                if (openingshaakjes[1] < geslotenhaakjes[0])
                  {
        
                    if (openingshaakjes[1]-1==openingshaakjes[0])
                    {  
                    
                      if (geslotenhaakjes[0]==openingshaakjes[1]+1) //(()      ) 
                        {
                          error="Niet begrepen haakjes"; 
                        }
                      else 
                      { 
                        teller2=0; 
                      
                        if (geslotenhaakjes[1]-1==geslotenhaakjes[0]) // ((     ))  
                          { 
                            somelementenhaakjes=[""];
                            teller2=0;
                            var i=0;   
                            for (i=0;i<somelements.length;i++)
                            {
                              if (!((i==openingshaakjes[0])||(i==geslotenhaakjes[0])))
                                {
                                  somelementenhaakjes[teller2]=somelements[i];
                                  teller2++;
                                } 
                            }
                          
                            somelements=somelementenhaakjes; 
                            openingshaakjes=[0];
                            geslotenhaakjes=[0];
                            aantalopeningshaakjes=0; 
                            aantalgeslotenhaakjes=0;   
                            for (i=0;i<somelements.length;i++)
                            {
                               switch (somelements[i])
                               {
                                 case '(':openingshaakjes[aantalopeningshaakjes]=i+1; 
                                          aantalopeningshaakjes+=1;
                                          break;
                                 case ')':geslotenhaakjes[aantalgeslotenhaakjes]=i+1; 
                                          aantalgeslotenhaakjes+=1;
                                          break;  
                                }                    
                            } 
                          
                            pos1=openingshaakjes[0];
                            pos2=geslotenhaakjes[0]-1;
                           
                            haakjesresult=haakjesverwerking(pos1,pos2,somelements);
                            somelementsresult=haakjesresult[0];
                            error=haakjesresult[1];                  
                          
                          }       
                      }
                    }
                  else   // haakjesverwerking case (...(...)...)...
                  {                   
                    if ((geslotenhaakjes[0]==openingshaakjes[1]+1))  // (     ()) en (     ()     )
                        { error="Niet begrepen haakjes";}
                    else    //(      ()     ) //
                    {if (openingshaakjes[0] !=1) 
                        {
                          kar=somelements.charAt(openingshaakjes[0]-1); 
                          if (!((kar=="*")||(kar=="/")||(kar=="+")||(kar=="-")))
                            error="Incorrect format 1";
                        }
                    }
                  
                    kar=somelements[openingshaakjes[0]];
                    if ((kar=="*")||(kar=="/")||(kar=="+")||(kar=="-"))
                      error="Incorrect format 2";
                    kar=somelements[geslotenhaakjes[0]+1];
                    if (!((kar=="*")||(kar=="/")||(kar=="+")||(kar=="-")))
                      error="Incorrect format 3";
                    //if (geslotenhaakjes[1] != somelements.length)
                    //  {
                    //    kar=somelements[geslotenhaakjes[1]];
                    //    if (!((kar=="*")||(kar=="/")||(kar=="+")||(kar=="-")))
                    //      error="Incorrect format";
                    //  }
                          
                    kar = somelements[openingshaakjes[0]];
                    if ((kar=="*")||(kar=="/")||(kar=="+")||(kar=="-"))
                      error="Incorrect format 4";
                    kar = somelements[openingshaakjes[1]];
                    if ((kar=="*")||(kar=="/")||(kar=="+")||(kar=="-"))
                      error="Incorrect format 5";
                    kar = somelements[geslotenhaakjes[1]-1];
                    if ((kar=="*")||(kar=="/")||(kar=="+")||(kar=="-"))
                      error="Incorrect format 6"; 
                    if (error=="")
                      { 
                        teller3=openingshaakjes.length;
                        var teller4=0;
                        somelementsresult=somelements;
                         
                        while (teller3>0)   // Dus : van binnen naar buiten werken 
                        {  
                          teller3-=1; 
                          pos1=openingshaakjes[openingshaakjes.length-1]-1;
                          pos2=geslotenhaakjes[0]-1;  
                          haakjesresult=haakjesverwerking(pos1,pos2,somelementsresult);
                          
                          somelementsresult=haakjesresult[0]; 
                          error=haakjesresult[1];
                          openingshaakjes=[0];     // openingshaakjes en geslotenhaakjes moeten opnieuw worden bepaald omdat te verwerken array opnieuw is gedefinieerd 
                          geslotenhaakjes=[0]; 
                          aantalgeslotenhaakjes=0;
                          aantalopeningshaakjes=0; 
                       
                          for (i=0;i<somelementsresult.length;i++)
                          { kar=somelementsresult[i];
                            switch (somelementsresult[i])
                            {
                              case '(':openingshaakjes[aantalopeningshaakjes]=i+1; 
                                       aantalopeningshaakjes+=1;
                                       break;
                              case ')':geslotenhaakjes[aantalgeslotenhaakjes]=i+1; 
                                       aantalgeslotenhaakjes+=1;
                                       break;  
                            }                  
                          }
                          
                        }
                      
                      } // error "" 
                    else {}
                    
                    
                  }
               } // einde openingshaakjes[1]<geslotenhaakjes[0]     
            else    // hieronder verwerking (   )   (   )
            { pos1=openingshaakjes[0]-1;
              pos2=geslotenhaakjes[0]-1;
              //document.write(somelements[pos1]+" "+somelements[pos2]); 
              haakjesresult=haakjesverwerking(openingshaakjes[0]-1,geslotenhaakjes[0]-1,somelements);
              somelementsresult=haakjesresult[0]; 
              error=haakjesresult[1];
              
              openingshaakjes=[0];
              geslotenhaakjes=[0]; 
              aantalgeslotenhaakjes=0;
              aantalopeningshaakjes=0; 
           
              for (i=0;i<somelementsresult.length;i++)
              { kar=somelementsresult[i];
                switch (somelementsresult[i])
                {
                  case '(':openingshaakjes[aantalopeningshaakjes]=i+1; 
                           aantalopeningshaakjes+=1;
                           break;
                  case ')':geslotenhaakjes[aantalgeslotenhaakjes]=i+1; 
                           aantalgeslotenhaakjes+=1;
                           break;  
                }
              }                  
              haakjesresult=haakjesverwerking(openingshaakjes[0]-1,geslotenhaakjes[0]-1,somelementsresult);
              somelementsresult=haakjesresult[0];
              error=haakjesresult[1]; 
            }
          } // if statement op basis van aantal haakjes 2 // 
        else  //Hieronder .....(....)....
        {  // aantal haakjes is een //
           if (geslotenhaakjes[0]<openingshaakjes[0])
              error="gesloten haakje kan niet voor openingshaakje komen ";
           if (geslotenhaakjes[0]-1==openingshaakjes[0])
              error="Incorrect format";
           if (error=="")
             {
              haakjesresult=haakjesverwerking(openingshaakjes[0]-1,geslotenhaakjes[0]-1,somelements);
              somelementsresult=haakjesresult[0];
              error=haakjesresult[1];
             } 
        }     
      }
    }
  }
  
  //document.write("error : "+error); 

  var somelementsresultcomp=[somelementsresult,error];
  return somelementsresultcomp; 
}

function vormgetallen(vormelementen)
{
  var error=""; 
  var getalins=""; 
  var getallen=[""];
  var aantalgetallen=0; 
  var kar="";
  var aantalkommas=0;
  var getallennumarr=[0];   
  for (i=0;i<vormelementen.length;i++)
     { 
       
       kar=vormelementen[i];
       
       if (((kar =="*") || (kar == "/") || (kar =="-")||(kar =="+"))&&(i!=0))
         { if (vormelementen[0]=="-")
             getalins="-"+getalins;
            
           getallen[aantalgetallen]=getalins;
           operators[aantalgetallen]=kar;
           aantalgetallen++;
           getalins=" "; 
         }
       else
       { if ((i==0)&&((kar=="-")||(kar=="+")))
           {}
         else 
         { if (kar !="")
             getalins+=kar;
         } 
       }
     }
  
  var i2,i3=0;
  var getalstr="";  
  var getalstr2="";
  if (getalins!=" ")
    getallen[aantalgetallen]=getalins; 
  for (i=0;i<getallen.length;i++) // controle dubbele komma's 
  {  getalstr=getallen[i]; 
     aantalkommas=0; 
     i2=0; 
     
     while (i2<getalstr.length)
     { kar=getalstr.charAt(i2);
       if (getalstr.charAt(i2)==",")
         { if (i2==0)
             {getalstr2="0,"; 
             }  
           else
           {            
             if (i2==(getalstr.length-1))
               {}
             else getalstr2=getalstr2+kar;
           } 
           aantalkommas+=1;
         } 
      else 
      { if (i2==0)
          getalstr2=kar;
        else getalstr2+=kar; 
      }
      i2+=1; 
     } 
     if (aantalkommas>1)
       error="Tenminste een getal bevat meer dan een komma";  
     getallen[i]=getalstr2;  
  }
  var getalnum=0;
  i2=0;
  var omvang=0;
  var teken=1;
  var kommapositie=0; 
  var lengtevoorkomma=0;
  
  for (i=0;i<getallen.length;i++)
  { getalstr=getallen[i]; 
    //document.write("om te vormen getal "+getalstr);//
    //document.write("getalstr : "+getalstr);
      
    if (error == "")  
      { //document.write("binnen lege fout");
          
        while (i2<getalstr.length)
        { 
          if ((getalstr.charAt(i2)==",")||(getalstr.charAt(i2)=="."))
            kommapositie=i2;
          i2++;  
        }
             
        if (kommapositie==0)
           lengtevoorkomma=getalstr.length;
        else lengtevoorkomma=kommapositie;  
        i2=0;
        
        while (i2 < lengtevoorkomma)
        { 
          if ((getalstr.charAt(i2)=="-") && (i==0))
            teken=-1; 
          else omvang+=getalstr.charAt(i2)*10**(lengtevoorkomma-i2-1); 
          i2++;
        } 
        i2++;
        i3=0;  
        if (kommapositie!=0)
          {
            while (i2<getalstr.length)
            { i3+=1; 
              if (omvang+=getalstr.charAt(i2)*10**(-i3)); 
              i2++; 
            }
          }
         
        omvang=omvang*teken;
        i2=0; 
        getallennumarr[i]=omvang;
        teken=1;   
        omvang=0;
        kommapositie=0;
      }
    else omvang=0;
    
  } 
  var vormgetallenresultaat=[getallennumarr,error]; 
  return vormgetallenresultaat; 
}

function zoekoperators(vormelementen2)
  {
    var operatorsarr=[""];
    var aantaloperators=0;  
    for (i=0;i<vormelementen2.length;i++)
       { kar=vormelementen2[i];
         if (((kar =="*") || (kar == "/") || (kar =="-")||(kar =="+"))&&(i!=0))
           { operatorsarr[aantaloperators]=kar;
             aantaloperators++;  
           }
       } 
        
    return operatorsarr; 
  }
 
 function getuitkomstgetal(getallennumarr,operatorsarr)
 {
     i=0;
     var uitkomstnum=0;
     var getallennumarr2=getallennumarr;
     var operators2=[""];   
     var operator=""; 
     var getal=0;
     var i2=0;
     var numberofdivandmult=0;  

     for (i=0;i<operatorsarr.length;i++)
     { 
       operator=operatorsarr[i];
       if (operator=="/") 
         {
           if (getallennumarr[i+1]==0)
             error="Delen door nul is flauwekul";
         }
     }
     //document.write("begin verwerking "+getallennumarr.length+" "+operatorsarr.length);
     //for (i=0;i<getallennumarr.length;i++)
     //document.write(getallennumarr[i]);
     //for (i=0;i<operatorsarr.length;i++)
     //document.write(operatorsarr[i]); 

     if (getallennumarr.length<=operatorsarr.length)
       {
         error="Er mist een getal in de som"; 
       }
     var uitkomstnumm=0; 
     if (error=="")
       { var aantalkeeroperators=operatorsarr.length; 
         for (i=0;i<operatorsarr.length;i++)
         { 
           operator=operatorsarr[i]; 
           if ((operator=="*")||(operator=="/"))
             { 
               getallennumarr2=[0];
               operator2=[""]; 

               if (operator=="*")
                 getal=getallennumarr[i]*getallennumarr[i+1]; 
               else getal=getallennumarr[i]/getallennumarr[i+1];  
               i2=i; 
               i3=0;
               i4=0; 
               for (i4=0;i4<getallennumarr.length;i4++) //verwerking eliminatie * en / 
               {      
                 if (i4<i2)
                   {getallennumarr2[i3]=getallennumarr[i4];
                    i3++; 
                   }
                 else 
                 {
                   if (i4==i2)
                     { 
                      getallennumarr2[i3]=getal; // verwerking uitkomst / of *
                      i3++;
                     }
                   else 
                   { if ((i4!=i2)&&(i4!=(i2+1)))  // verwerkte getallen niet in nieuwe array 
                        {getallennumarr2[i3]=getallennumarr[i4];
                         i3++;
                        }
                    }
                          
                  }
                }  // herschrijven array zonder * of /
               
                  
                  
                i3=0;
                i2=i;
                operators2=[" "]; 
                for (i4=0;i4<operatorsarr.length;i4++) //eleminatie * of / operator 
                {
                  if (i4!=i2)
                    {  operators2[i3]=operatorsarr[i4];
                       i3++; 
                    }
                }
                i=i-1; 
                operatorsarr=operators2;
                getallennumarr=getallennumarr2;
              } 
           else {}
         } // bewerking * of /
         
         //document.write("aantal getallen : "+getallennumarr.length);
         //document.write("aantal operators : "+operatorsarr.length);; 
         uitkomstnum=getallennumarr[0];   // berekening met alle getallen van de som. 
                                          // In geval van haakjes hetgeen er tussen de haakjes staat  
         for(i=0;i<operatorsarr.length;i++)
         { operator=operatorsarr[i]; 
           switch (operator)
           {
            case "+":uitkomstnum+=getallennumarr[i+1]; 
                     break;
            case "-":uitkomstnum-=getallennumarr[i+1]; 
                     break; 
            case "*":uitkomstnum=uitkomstnum*getallennumarr[i+1]; 
                     break;
            case "/":uitkomstnum=uitkomstnum/getallennumarr[i+1]; 
                      break;
           }
          }
       }  
     
     var uitkomstnumresultaat=[uitkomstnum,error]
     return uitkomstnumresultaat;  
 }


 function getsomelementen(sominhoudloc)
 { var somelementenloc=[""];
   
   var teller2=0; 
   var kar=""; 
   var somelementenloc=[""];
     for (var i=0;i<sominhoudloc.length-5;i++)
     {  kar=sominhoudloc.charAt(i+5);   
        if ((kar != null) && (kar!="") && (kar !=" "))
          {    
            somelementenloc[teller2]=kar;
            teller2++; 
          }      
     }
  
  return somelementenloc; 
 }


var uitkomstlabel="Uitkomst : ";

$('button#clear').on("click",function(){clearvalues();}); 
$('div#div2').on("click",function(e){getsomelement(e.target.textContent);}); 
$('button#buttonberek').on("click",function(){getuitkomst();});
