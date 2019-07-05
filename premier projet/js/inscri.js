

function verifPseudo(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifmail(champ)
{

}



function verifForm(f){
    var pseudo = verifPseudo;
    var mail = verifmail;

    if( pseudo && mail)
    return true;
    else
    {
        alert("remplir tout les champs");
        return false;
    }
}

