/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
   
    extend: {
      width:{
        mywidth:'100',
      },
      fontFamily:{
           headerFontFamily:"Nunito",
           titleFontFamily:'Nunito',
           footerFontFamily:' Arial',
           
           },
           fontSize:{
            headerFontSize:'20px',
            titleFontSize:'40px',
            mywordFontSize:'32px',
            textFontSize:'24px',
            textFontSizeeeee:'48px',
            myfontsize:'14px',
            FooterFontSize:'14px',
            anotherFontSize:'64px',
            forgetPasswordFontSize:'30px',
            xxxfontsize:'50px',
            addfontSize:'28px',
            adddfontSize:'26px',
            
           },
           fontWeight:{
            headerFontWeight:'400',
            titleFontWeight:'600',
            textFontWeight:'500',
            footerFontWeight:' 700',
        
           },
          lineHeight:{
            titleLineHeight:'60px',
            tittttttttleLineHeight:'33px',
            headerLineHeight:'30px',
            mylineheight:'21px',
            mywordLineHeight:'48px',
            textLineHeight:'36px',
            footerLineHeight:'18px',
            footerContentLineHeight:'22px',
            anotherLineHeight:' 96px',
            forgetPasswordLineHeight:'45px',
            lllineHeight:'40.92px',
            xxxlineHeight:'75px',
            xlineHeight:'48px',
            xvlineHeight:'68px',
            xvvvvlineHeight:'65px',
            addlineHeight:'42px',
            adddlineheight:'68px',
            addddlineHeight:'55px',
            adddddddddlineHeight:'27px',
           

          },
          letterSpacing:{
            footerLetterSpacing:'0.6px',
          },
          
          colors:{
            titleColor:'#1D5CB3',
            col:'#8c8c8c',
            xxxcolor:'#151515',
            xcolor:'#151515',
            addColor:'#1D5CB3',
            adxdColor:'#b3c7e4',
            borderColor:'#647B7F'
           } ,  
           screens: {
            'smartphone': {'min': '320px', 'max': '1440px'},
            // => @media (min-width: 640px and max-width: 767px) { ... }
      
            'tablet': {'min': '1024px', 'max': '2732px'},
            // => @media (min-width: 768px and max-width: 1023px) { ... }
      
            'laptop': {'min': '1366px', 'max': '3840px'},
            // => @media (min-width: 1024px and max-width: 1279px) { ... }
      
            'desktop': {'min': '1920px', 'max': '5000px'},
            // => @media (min-width: 1280px and max-width: 1535px) { ... }
      
           
          }, 
              
 },
 
  },
  plugins: [ require('flowbite/plugin')],
}

