import coverVideo from '~/assets/temp/FieldGirl.mp4'
import logo from '~/assets/temp/logo.png'

export const cover_video: string = coverVideo
export const logo_png: string = logo

export const header_navbar = [
    { title: 'home',path: '/home' },
    { title: 'index',
      path: '/',
      anchorList: [
        { title: 'id0', anchor: '/#id0'},
        { title: 'id1', anchor: '/#id1'},
        { title: 'id2', anchor: '/#id2'},
        { title: 'id3', anchor: '/#id3'},
        { title: 'id4', anchor: '/#id4'},
        { title: 'id5', anchor: '/#id5'},
      ],
    },
    { 
        title: 'about',
        path: '/about',
        anchorList: [
          { title: 'id1', anchor: '/about#id1'},
          { title: 'id2', anchor: '/about#id2'},
          { title: 'id3', anchor: '/about#id3'},
          { title: 'id4', anchor: '/about#id4'},
          { title: 'id5', anchor: '/about#id5'},
      ], 
    },
    { title: 'other',path: '/other' },
]