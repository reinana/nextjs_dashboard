import { Inter, Lusitana } from 'next/font/google';
//プライマリフォント 静的アセットとともにホストするのでフォントが最適化される
// していないとロードした後システム フォントでテキストをレンダリングし、読み込まれた後にカスタム フォントに置き換えるときに、レイアウトのシフトが発生
export const inter = Inter({ subsets: ['latin']})

export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'],
})

