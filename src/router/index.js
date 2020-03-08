import Vue from 'vue'
import VueRouter from 'vue-router'
import lovev from './../views/lovev'
import film from './../views/film'
import dierctor from './../views/dierctor'
import buyOnline from './../views/buyOnline'
import buy from './../views/buy'
import wonderfulFilm from './../views/wonderfulFilm'
import comment from './../views/comment'
import add from './../views/add'
import login from './../views/login'
import myWallet from './../views/myWallet'
import myOrder from './../views/myOrder'
import miguMovie from './../views/lovev/miguMovie'
import self from './../views/lovev/self'
import ticket from './../views/lovev/ticket'
import alone from './../views/lovev/miguMovie/alone'
import recommend from './../views/lovev/miguMovie/recommend'
import review from './../views/lovev/miguMovie/review'
import smallVideo from './../views/lovev/miguMovie/smallVideo'
import watchingFree from './../views/lovev/miguMovie/watchingFree'
import cinema from './../views/lovev/ticket/cinema'
import films from './../views/lovev/ticket/films'
import hit from './../views/lovev/ticket/films/hit'
import soon from './../views/lovev/ticket/films/soon'
import cinemaTicket from './../views/myOrder/cinemaTicket'
import concertTickets from './../views/myOrder/concertTickets'
import coninCertificate from './../views/myWallet/coninCertificate'
import deduction from './../views/myWallet/deduction'
import filmCoupon from './../views/myWallet/filmCoupon'
import plus from './../views/myWallet/plus'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/lovev/miguMovie/recommend'
  },
  {
    path: '/lovev',
    component: lovev,
    redirect: '/lovev/miguMovie/recommend',
    children: [
      {
        path: 'miguMovie',
        component: miguMovie,
        meta: {
          footer: '看片'
        },
        redirect: '/lovev/miguMovie/recommend',
        children: [
          {
            path: 'alone',
            component: alone
          },
          {
            path: 'recommend',
            component: recommend
          },
          {
            path: 'review',
            component: review
          },
          {
            path: 'smallVideo',
            component: smallVideo
          },
          {
            path: 'watchingFree',
            component: watchingFree
          }
        ]
      },
      {
        path: 'buyOnline',
        component: buyOnline
      },
      {
        path: 'buy',
        component: buy
      },
      {
        path: 'self',
        meta: {
          footer: '我的'
        },
        component: self
      },
      {
        path: 'ticket',
        component: ticket,
        meta: {
          footer: '购票'
        },
        redirect: '/lovev/ticket/films/hit',
        children: [
          {
            path: 'films',
            component: films,
            redirect: '/lovev/ticket/films/hit',
            meta: {
              xTabIndex: 0
            },
            children: [
              {
                path: 'hit',
                component: hit,
                meta: {
                  xtabIndex: 0
                }
              },
              {
                path: 'soon',
                component: soon,
                meta: {
                  xtabIndex: 1
                }
              }
            ]
          },
          {
            path: 'cinema',
            component: cinema,
            meta: {
              xTabIndex: 1
            }
          }
        ]
      }
    ]
  },
  {
    path: '/film/:id',
    component: film
  },
  {
    path: '/dierctor',
    component: dierctor
  },
  {
    path: '/wonderfulFilm',
    component: wonderfulFilm
  },
  {
    path: '/comment',
    component: comment
  },
  {
    path: '/add',
    component: add
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/myWallet',
    component: myWallet,
    redirect: '/myWallet/filmCoupon',
    children: [
      {
        path: 'filmCoupon',
        component: filmCoupon,
        meta: {
          inptsId: 0
        }
      },
      {
        path: 'deduction',
        component: deduction,
        meta: {
          inptsId: 1
        }
      },
      {
        path: 'plus',
        component: plus,
        meta: {
          inptsId: 3
        }
      },
      {
        path: 'coninCertificate',
        component: coninCertificate,
        meta: {
          inptsId: 2
        }
      }
    ]
  },
  {
    path: '/myOrder',
    component: myOrder,
    children: [
      {
        path: 'cinemaTicket',
        component: cinemaTicket
      },
      {
        path: 'concertTickets',
        component: concertTickets
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
