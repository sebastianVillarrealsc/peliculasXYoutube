enum TasksStatus{
    accion ='accion',
    aventura ='aventura',
    drama ='drama',
    Terror ='Terror',
    comedia ='comedia',
    romance ='romance',
    documental ='documental',
    musical ='musical',
    infantil ='infantil'

}

export class Task {
id: string
title: string
year: number
director: string
duration: string
poster: string
genre: TasksStatus
rate: string 
}

