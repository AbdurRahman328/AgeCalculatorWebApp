function calulateAge(){
    p = document.getElementById("out");
    str = "You are ";
    td = new Date();
    birthdate = document.getElementById("date"); //year-month-date
    bd = new Date(birthdate.value);

    if(bd>td){
        alert("Invalid Birthday");
    }
    else{
        d1 = bd.getDate();
        d2 = td.getDate();
        m1 = bd.getMonth()+1;
        m2 = td.getMonth()+1;
        y1 = bd.getFullYear();
        y2 = td.getFullYear();
    
        d3=0;m3=0;y3=0;
    
        y3 = y2-y1;
        m3 = m2-m1;
        d3 = d2-d1;
    
        if(d3<0){
            d3 = 30-d3;
            m3 = m3-1;
        }
        if(m3<0){
            m3 = 12-m3;
            y3 = y3-1;
        }
        y3 = "<b style='color:#ffff76'>"+y3+"</b>";
        m3 = "<b style='color:#ffff76'>"+m3+"</b>";
        d3 = "<b style='color:#ffff76'>"+d3+"</b>";
        str = str+y3+" years "+m3+" months "+d3+" days.";
        console.log(y3,m3,d3);
        p.innerHTML = str;
    }
}