import CoreApi from '../src/http/CoreApi';
import { allure } from 'allure-mocha/runtime';
import { assert } from 'chai';
import axios from 'axios';

describe('Поиск и удаление случайного кота', async () => {
  it('Удаление случайного кота', async () => {
    const getRandomInt = (max: number) => Math.floor(Math.random() * max);
    const resp = await CoreApi.getAllCats();
    const randomValue = getRandomInt(resp.data.groups.length);
    const randomCatId = resp.data.groups[randomValue].cats[0].id;
    console.log(`Найден кот с ID ${randomCatId}`);
    const responseRemove = await CoreApi.removeCat(randomCatId);
    console.log(`Кот с ID ${randomCatId} удалён`)
    const status: number = 200;
    // assert.ok(
    //  responseRemove.status === status,
    //  `Актуальный статус код при удалении ${responseRemove.status}, ожидался ${status}`
    // );
    /*{
      if (axios.isAxiosError(error)) {
        response = error.response;
      } else {
        console.error(error);
      }
    }*/
   // const responseSearch = await CoreApi.getCatById(randomCatId);
    CoreApi.getCatById(randomCatId).catch(error=>{
      console.log(`wwww`);
    });
    /*try{
      console.log(`qqqqq`);
      const responseSearch = await CoreApi.getCatById(randomCatId);
      console.log(`hmmm`);
    } catch (error){
      console.log(`hmmm22`);
      console.log(error.response.status);
    }*/
   /* const searchStatus: number = 404;
    assert.ok(
      responseSearch.status === searchStatus,
      `Актуальный статус код при поиске ${responseSearch.status}, ожидался ${searchStatus}`
    );*/
  });
})
