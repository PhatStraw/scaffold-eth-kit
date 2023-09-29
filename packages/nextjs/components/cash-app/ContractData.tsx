import { useState } from "react";
import { useAccount } from "wagmi";
import {
  useScaffoldContract,
  useScaffoldContractRead,
  useScaffoldEventHistory,
  useScaffoldEventSubscriber,
} from "~~/hooks/scaffold-eth";

export const ContractData = () => {
  const { address } = useAccount();
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const { data: balances } = useScaffoldContractRead({
    contractName: "CashApp",
    functionName: "balances",
    args: [address],
  });

  const { data: cashTagOwner } = useScaffoldContractRead({
    contractName: "CashApp",
    functionName: "cashtag",
    args: [address],
  });
  console.log("addy", cashTagOwner);

  const { data: messages } = useScaffoldContractRead({
    contractName: "CashApp",
    functionName: "messages",
    args: [BigInt(0)],
  });
  console.log("messages", messages);

  useScaffoldEventSubscriber({
    contractName: "CashApp",
    eventName: "MessageSent",
    listener: logs => {
      logs.map(log => {
        const { content, sender, receiver } = log.args;
        console.log("📡 GreetingChange event", content, sender, receiver);
      });
    },
  });

  const {
    data: messageSentChangeEvents,
    isLoading: isLoadingEvents,
    error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "CashApp",
    eventName: "MessageSent",
    fromBlock: process.env.NEXT_PUBLIC_DEPLOY_BLOCK ? BigInt(process.env.NEXT_PUBLIC_DEPLOY_BLOCK) : 0n,
    blockData: true,
  });

  console.log("Events:", isLoadingEvents, errorReadingEvents, messageSentChangeEvents);

  const { data: cashApp } = useScaffoldContract({ contractName: "CashApp" });
  console.log("CashApp: ", cashApp);

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 max-w-[100vw] ">
      <div className={`flex flex-col bg-base-200 bg-opacity-70 max-h-[60%] rounded-2xl shadow-lg px-5 py-4 w-full`}>
        <div className="flex justify-between w-full">
          <button
            className="btn btn-circle btn-ghost relative bg-center bg-[url('/assets/switch-button-on.png')] bg-no-repeat"
            onClick={() => {
              setTransitionEnabled(!transitionEnabled);
            }}
          >
            <div
              className={`absolute inset-0 bg-center bg-no-repeat bg-[url('/assets/switch-button-off.png')] transition-opacity ${
                transitionEnabled ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>
          <div className="bg-secondary border border-primary rounded-xl flex">
            <div className="p-2 py-1 border-r border-primary flex items-end">Total Message Count</div>
            <div className="text-4xl text-right min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree">
              {messageSentChangeEvents?.length || "0"}
            </div>
          </div>
        </div>

        <div className="overflow-scroll mt-3 border border-primary bg-neutral rounded-3xl text-secondary text-[116px] w-full uppercase tracking-tighter font-bai-jamjuree">
          <div className="overflow-scrol">
            {messageSentChangeEvents?.map(i => (
              <div key={i} className="px-4">
                {i.args.content},{i.args.sender},{i.args.receiver}
              </div>
            )) || null}
          </div>
        </div>

        {/* New section */}
        <div className="mt-3">
          <div className="text-secondary text-lg font-bold mb-2">Cash Tag Owner:</div>
          <div className="text-secondary text-xl font-bold">{cashTagOwner}</div>
        </div>

        <div className="mt-3">
          <div className="text-secondary text-lg font-bold mb-2">Balances:</div>
          <div className="text-secondary text-xl font-bold">{balances?.toString()}</div>
        </div>
      </div>
    </div>
  );
};
