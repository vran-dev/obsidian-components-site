import { MoveRightIcon, ShoppingCart } from "lucide-react";
import "./Banner.css";

export default function () {
  return (
    <div className="flex flex-col gap-6 items-center justify-center text-left lg:h-[80vh] h-[60vh] px-4 bg-gra">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-600 to-yellow-400 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="w-full  xl:text-9xl md:text-8xl text-4xl md:text-6xl p-2 tracking-wider relative">
        <span className="font-bold bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text">
          Components
        </span>
        {/* <span className="absolute text-sm bg-red-400 text-white rounded px-2 top-[1rem]">
          3.0
        </span> */}
      </div>
      <div className="w-full xl:text-4xl md:text-2xl text-xl tracking-wider font-bold relative px-2">
        告别代码，在 Obsidian 中可视化构建你的第二大脑
      </div>
      <div className="w-full text-md tracking-wider text-gray-200 relative  px-2">
        从笔记到系统，自由组合布局·多视图数据库·可视化仪表盘
      </div>
      <div className="w-full  mt-4  px-2 flex gap-4">
        <button
          className="inline-flex items-center justify-center  gap-2 rounded-lg w-48 py-3 px-4 font-bold hover:bg-gray-50 hover:text-slate-900 border border-gray-600 text-slate-800 bg-gray-200"
          onClick={() =>
            window.open(
              "https://wxycbt0cjk.feishu.cn/wiki/VQZjwNCS7i1d83kOgrOc0oDtnKb"
            )
          }
        >
          立即试用 <MoveRightIcon size={16} />
        </button>
        <button
          className="inline-flex items-center justify-center  gap-2 rounded-lg bg-transparent hover:bg-gray-600 hover:text-white w-48 py-3 px-4 font-bold border border-gray-700 text-white"
          onClick={() =>
            window.open(
              "https://wxycbt0cjk.feishu.cn/wiki/Hfz9wTuqpiDIkokAMETcoRjnnmh"
            )
          }
        >
          直接买断 <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}
