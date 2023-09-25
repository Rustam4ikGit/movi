import {movies} from "./db.js";




/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// // 2
let reklama = document.querySelectorAll('.promo__adv img')
reklama.forEach(element => element.remove())

// // 3


let ul = document.querySelector('.promo__interactive-list')
let bg = document.querySelector('.promo__bg')
let genre = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title')
let descr = document.querySelector('.promo__descr')


for (let item of movies) {
    let li = document.createElement('li')
    let divDelete = document.createElement('div')
    // let ratings = document.querySelector('.promo__ratings')
    // let sp = document.querySelectorAll('span')
    
    
    li.classList.add('promo__interactive-item')
    divDelete.classList.add('delete')
    
    li.innerHTML = item.Title
    
    ul.append(li)
    li.append(divDelete)
    // ratings.append(sp)

    divDelete.onclick = () => {
        li.style.display = "none"
    }

    li.onclick = () => {
        bg.src = item.Poster;
        genre.innerHTML = item.Genre
        title.innerHTML = item.Title
        descr.innerHTML = item.Director
    }
}
