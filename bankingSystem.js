
function getinput(inpuId){
    const inputField= document.getElementById(inpuId);
    const userinputtext=inputField.value;
    const inputFieldnum=parseFloat(userinputtext);
// clear
inputField.value='';
return inputFieldnum;
}

function getamountid(id,depositetext){
    const depositeusertext= document.getElementById(id);
    const depositenum=depositeusertext.innerText;
    const depositefolat=parseFloat(depositenum);
    depositeusertext.innerText =depositetext+depositefolat;
}
function currentbalance(){
    const balance= document.getElementById('balance-text');
    const blancetext=balance.innerText;
    const balancenum=parseFloat(blancetext);
    return balancenum;
}
function balanceupdate(getamountidfun,add){
    const balance= document.getElementById('balance-text');
    const balancenumf =currentbalance();
    if(add==true){
        balance.innerText=balancenumf+getamountidfun;
    }
    else{
        balance.innerText =balancenumf-getamountidfun;  
    } 
}

// deposite

document.getElementById('deposite-btn').addEventListener('click',function(){
    
const getamountidfun=getinput('deposite-input');
if(getamountidfun>0){
getamountid('deposit-text',getamountidfun);
balanceupdate(getamountidfun,true);
}
})


// widthrow
document.getElementById('widhrow-btn').addEventListener('click',function(){
    const getwidrowfun=getinput('widhrow-input');
    const nowbalance=currentbalance()
    if(getwidrowfun>0 && nowbalance > getwidrowfun){
    getamountid('widthrow-text',getwidrowfun);
    balanceupdate(getwidrowfun,false);
    }
})