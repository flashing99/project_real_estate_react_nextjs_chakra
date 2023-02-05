export const usePropertyFormat =(property)=>{
    // console.log(property);
   //console.log('PRIX::',property.price.toLocaleString())
 
    //const address = property.location.map((location)=> location.name).join(', ');
    const address = property.location.map((location)=> location.name).join(', ');
    const coverPhoto = property.coverPhoto.url;
    const propertyType =`${ property.category[0].name , property.category[1].name }`;
    const price = property.price.toLocaleString("en-US",{
        style:"currency",
        currency:"USD",
        maximumFractionDigits:0 
    });
    const title = property.title;
    const rooms = property.rooms;
    const baths = property.baths;
    const purpose = property.purpose;
    const sqSize =property.area.toFixed(2);
    const externalID = property.externalID;

    return {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID
    }
}