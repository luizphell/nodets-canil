import {Request,Response} from 'express'

export const home = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            titulo:'Todos os animais',
            background:'allanimals.jpg'
        },
        menu:{
            home:true,
            dog:false,
            cat:false,
            fish:false
        }
    })
}
export const dogs = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            titulo:'Cachorros',
            background:'banner_dog.jpg'
        },
        menu:{
            home:false,
            dog:true,
            cat:false,
            fish:false
        }
    })
}
export const cats = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            titulo:'Gatos',
            background:'banner_cat.jpg'
        },
        menu:{
            home:false,
            dog:false,
            cat:true,
            fish:false
        }
    })
}
export const fish = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            titulo:'Peixes',
            background:'banner_fish.jpg'
        },
        menu:{
            home:false,
            dog:false,
            cat:false,
            fish:true
        }
    })
}