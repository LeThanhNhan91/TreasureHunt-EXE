import { Traveller } from '@/app/api/travellers/types';
import { Camera, Compass, MapPin, PartyPopper } from 'lucide-react';
import React from 'react';

interface LeaderboardTableProps {
  leaderboardData: Traveller[];
  avatarGradients: Record<string, string>;
  badgeColors: Record<string, string>;
}

export default function LeaderboardTable({
  leaderboardData,
  avatarGradients,
  badgeColors,
}: LeaderboardTableProps) {
  return (
    <div className='mt-2 bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100'>
      {/* Table Header */}
      <div className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3'>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-2 text-center font-medium'>Rank</div>
          <div className='col-span-5 text-center font-medium'>traveller</div>
          <div className='col-span-5 font-medium ml-5'>Badge</div>
        </div>
      </div>

      {/* Table Body */}
      {leaderboardData.map((traveller, index) => (
        <div
          key={traveller.id}
          className='p-3 border-b border-gray-100 hover:bg-blue-50 transition-colors'
        >
          <div className='grid grid-cols-12 gap-2 items-center'>
            {/* Rank Column */}
            <div className='col-span-2'>
              <div className='w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold border-2 border-blue-100'>
                {index + 1}
              </div>
            </div>

            {/* traveller Column */}
            <div className='col-span-5 flex items-center'>
              <div
                className={`w-8 h-8 rounded-full ${
                  avatarGradients[traveller.id]
                } flex items-center justify-center mr-2 shadow-md shrink-0 mt-1`}
              >
                <div className='bg-white rounded-full w-6 h-6 flex items-center justify-center'>
                  {index === 0 ? (
                    <PartyPopper className='h-4 w-4 text-indigo-700' />
                  ) : index === 1 ? (
                    <Camera className='h-4 w-4 text-orange-500' />
                  ) : (
                    <Compass className='h-4 w-4 text-green-600' />
                  )}
                </div>
              </div>
              <div className='min-w-0 flex-1 justify-center'>
                <div className='font-medium text-gray-800 truncate'>
                  {traveller.name}
                </div>
                <div className='text-xs text-gray-500 flex items-center'>
                  <MapPin className='h-3 w-3 mr-1 text-blue-500 shrink-0' />
                  <span className='truncate'>
                    {traveller.destinations} destinations
                  </span>
                </div>
              </div>
            </div>

            {/* Badge Column */}
            <div className='col-span-5 ml-5'>
              <div
                className={`${
                  badgeColors[traveller.badge]
                } text-white text-xs px-2 py-1 rounded-full font-medium truncate w-fit`}
                title={traveller.badge}
              >
                {traveller.badge}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
