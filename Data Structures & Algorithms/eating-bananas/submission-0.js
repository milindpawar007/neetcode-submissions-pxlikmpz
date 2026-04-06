class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */


     canEat(piles,h,speed){

    let hours=0;
    
    for(let pile of piles ){
        hours= hours +Math.ceil(pile/speed)
    }
    
    return hours<=h
}
    minEatingSpeed(piles, h) {
            let minspeed=1;
    let maxspeed=0
     
    for(let pile of piles){
        maxspeed=Math.max(pile,maxspeed)
    } 

    while(minspeed<maxspeed){

        let mid= Math.floor((minspeed+maxspeed)/2);
       
       if (this.canEat(piles, h, mid)) {
    maxspeed = mid;
} else {
    minspeed = mid + 1;
}

    }

    return minspeed;
    }
}
