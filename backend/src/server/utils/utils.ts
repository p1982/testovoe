import IData from '../../types/posts.interface';
// helper find elemc
const findEl = (data: Array<any>, id:string) => {
  return data.find((item) => item.id === id);
};
interface IValid{
  text: string,
  title: string
}
// validation
const validate = (data: IData):IValid => {
  const { text, title } = data
  const newData:IValid = {text, title}
  return newData;
};

export {findEl, validate}