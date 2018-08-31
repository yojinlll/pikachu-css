!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id =  setInterval(()=>{
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if( n >= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },10)
    }
    let code = 
`
    .preview{
    height:100%;
    border:1px solid green;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#fee433;
    }
    .wrapper{
    width:100%;
    height:165px;
    position:relative;
    }
    .nose{
    width:0px;
    height:0px;
    border-style:solid;
    border-width:12px;
    border-color:black transparent transparent; 
    border-radius:11px;
    position:absolute;
    left:50%;
    top:28px;
    transform:translateX(-50%);
    }
    .eye{
    width:49px;
    height:49px;
    background:#2e2e2e;
    position: absolute;
    border-radius:50%;
    border:2px solid #000000;
    }
    .eye::before{
    content:'';
    display:block;
    height:20px;
    width:20px;
    background:white;
    position:absolute;
    border-radius:50%;
    left:4px;
    border:2px solid #000;
    }
    .eye.left{
    right:50%;
    margin-right:90px;
    }
    .eye.right{
    left:50%;
    margin-left:90px;
    }
    .face{
    width:68px;
    height:68px;
    background:#fc0d1c;
    border:2px solid black;
    border-radius:50%;
    position:absolute;
    top:85px;

    }
    .face.left{
    right:50%;
    margin-right:116px;
    }
    .face.right{
    left:50%;
    margin-left:116px;
    }
    .upperLip{
    height:21px;
    width:80px;
    border:2px solid black;
    border-top:none;
    position: absolute;
    top:50px;
    background:#fee433; 

    }
    .upperLip.left{
    transform:rotate(-20deg);
    border-bottom-left-radius:45px 20px;
    right:50%;
    border-right:none;
    z-index: 1;
    }
    .upperLip.right{
    transform:rotate(20deg);
    border-bottom-right-radius:45px 20px;
    left:50%;
    border-left:none;
    z-index: 1;
    }
    .lowerLip-wrapper{
    position:relative;
    left:50%;
    top:57px;
    margin-left:-150px;
    height:160px;
    width:300px;
    overflow:hidden;
    }
    .lowerLip{
    background:#990513;
    border:2px solid black;
    position: absolute;
    bottom:0;
    top:-850px;
    border-radius:100px/400px;
    width:140px;
    height:1000px;
    left:50%;
    margin-left:-70px;
    overflow:hidden;
    }
    .lowerLip::after{
    content:'';
    position:absolute;
    bottom:0;
    height:115px;
    width:120px;
    background:#fc4a62;
    left:50%;
    margin-left:-60px;
    border-radius:50%;
    }
`
    writeCode('',code)
}.call()