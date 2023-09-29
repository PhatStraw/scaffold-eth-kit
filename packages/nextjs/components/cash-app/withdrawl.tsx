import { useState } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const Withdrawl = () => {
  const [newWithdrawlCashTag, setWithdrawlCashTag] = useState("");

  const { writeAsync, isLoading }: { writeAsync: () => void; isLoading: boolean } = useScaffoldContractWrite({
    contractName: "CashApp",
    functionName: "withdrawl",
    args: [newWithdrawlCashTag],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
      <input
        type="text"
        placeholder="Withdrawl"
        className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
        onChange={e => setWithdrawlCashTag(e.target.value)}
      />
      <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
        <div className="flex rounded-full border-2 border-primary p-1">
          <button
            className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
            onClick={() => writeAsync()}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
