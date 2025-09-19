import { Car, CheckCircle2Icon, Rocket } from "lucide-react";
import DayCounter from "../../DayCounter";

export default function () {
  const iconSize = 36;
  const iconClass = "";
  const versions = [
    {
      title: "限时体验",
      price: "0 元 / 人",
      icon: <Car size={iconSize} className={iconClass} />,
      privileges: ["7 天免费体验全部功能"],
    },
    {
      title: "永久授权",
      price: "128 元 / 人",
      icon: <Rocket size={iconSize} className={iconClass} />,
      description: <div>永久授权不受版本更新限制</div>,
      privileges: [
        "一次买断，永久更新",
        "解锁全部组件",
        "专属会员群，即时响应",
        "专属模板库，开箱即用",
        "专属组件库，持续更新",
      ],
    },
  ];

  return (
    <div id="price" className="flex flex-col gap-4 mt-4 px-8  py-4">
      <div className="w-full text-4xl md:text-5xl font-bold py-8">
        <span className="font-bold bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text">
          买断制授权
        </span>
        ，一次付费，永久使用
      </div>

      {/* 产品持续更新展示 */}
      <div className="flex justify-center py-4">
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-6 py-4 flex items-center gap-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <DayCounter
            startDate="2024-01-17"
            label="Components 已持续更新"
            className="text-lg"
          />
        </div>
      </div>
      <div className="flex justify-center font-bold">
        <a
          href="https://wxycbt0cjk.feishu.cn/wiki/LnQMwwbZui7uFXkfkYocmHmNnpx"
          className="underline"
        >
          点击查看详细的购买协议
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center ">
        {versions.map((version, index) => {
          return (
            <div className="flex flex-col rounded-xl shadow min-h-96 md:w-72 border border-neutral-700 bg-neutral-800 rounded-xl">
              <div className="p-4 flex flex-col gap-4">
                <div>{version.icon}</div>
                <div className="font-bold text-md">{version.title}</div>
                <div className="font-bold text-3xl">{version.price}</div>
              </div>
              <div className="w-full p-4">
                <button
                  className="rounded-md w-full py-1 px-4 font-bold bg-gradient-to-r from-gray-600 via-neutral-500 to-slate-400 transition-colors text-white hover:from-gray-500 hover:via-neutral-400 hover:to-slate-300"
                  onClick={() =>
                    window.open(
                      "https://wxycbt0cjk.feishu.cn/wiki/Hfz9wTuqpiDIkokAMETcoRjnnmh"
                    )
                  }
                >
                  立即获取 →
                </button>
              </div>
              <div className="flex flex-col gap-2 p-4 border-b border-neutral-700">
                {version.privileges.map((privilege) => (
                  <div key={privilege} className="flex gap-2 items-center">
                    <CheckCircle2Icon size={16} className="text-green-500" />
                    <div>{privilege}</div>
                  </div>
                ))}
              </div>
              {version.description && (
                <div className="h-full p-4">{version.description}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
