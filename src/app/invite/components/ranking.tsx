import Image from 'next/image'
import cooperMedal from '../../../assets/medal-cooper.svg'
import goldMedal from '../../../assets/medal-gold.svg'
import silverMedal from '../../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">1º</span> | Nikollas Ohta
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1000
          </span>

          <Image alt="" src={goldMedal} className="absolute top-0 right-8" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">2º</span> | Nikollas Ohta
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1000
          </span>

          <Image alt="" src={silverMedal} className="absolute top-0 right-8" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">3º</span> | Nikollas Ohta
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1000
          </span>

          <Image alt="" src={cooperMedal} className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
