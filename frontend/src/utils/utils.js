export const optimazeData = (data) => {
    return data.reduce((acc,cur)=>{
        acc[cur.id] = cur
        return acc 
    }, {})
}