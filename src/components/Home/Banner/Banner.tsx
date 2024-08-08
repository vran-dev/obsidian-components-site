import "./Banner.css";

export default function () {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[32rem]">
      <div className="w-full text-center xl:text-8xl md:text-6xl text-4xl p-2 tracking-wider relative">
        <span className="font-bold bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text">
          Components
        </span>
        <span className="absolute text-sm bg-red-400 text-white rounded px-2">
          付费版
        </span>
      </div>
      <div className="w-full text-center xl:text-3xl md:text-2xl text-xl tracking-wider text-gray-500 font-bold relative">
        一个可以改变&nbsp;
        <span className="inline-flex font-bold gap-0.5 items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 inline-block text-transparent bg-clip-text">
          <img src="./img/obsidian.svg" className="w-5 h-5" alt="Obsidian" />
          Obsidian&nbsp;
        </span>
        玩法的插件
      </div>
      <div className="w-full text-center text-xl tracking-wider text-gray-400 font-bold relative">
        <div className="type-writer">设计、组织和管理你的知识系统 🚀</div>
      </div>
      <div className="w-full text-center mt-4">
        <button
          className="rounded-md w-36 py-1 px-4 font-bold hover:bg-gray-500 hover:text-white border border-gray-500 text-slate-800 bg-white"
          onClick={() =>
            window.open(
              "https://wxycbt0cjk.feishu.cn/wiki/Hfz9wTuqpiDIkokAMETcoRjnnmh"
            )
          }
        >
          点击获取 →
        </button>
      </div>
    </div>
  );
}
