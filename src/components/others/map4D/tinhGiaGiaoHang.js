export const giaGiaoHang = async (distaince) => {
    distaince=Math.floor(distaince);
    if(distaince<1000){
        return 15000;
    }else{
        return 15000 + (distaince-1000)/1000*5000;
    }
}