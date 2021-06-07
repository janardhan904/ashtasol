import React from 'react';

const topBar = () => {
  return (
    <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-white">
          <thead class="bg-gray-50">
          </thead>
          <tbody class="bg-indigo-700">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-16 w-16">
                    <img class="h-16 w-16 rounded-full border" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                    </img>
                  </div>
                  <div class="ml-4">
                    <div class="text-2xl text-white font-light leading-normal">
                      Hello,<br/>Louise!
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-white text-6xl font-thin">
                13
              <div class="text-sm inline-block leading-normal"> <strong>Friday</strong> <br/>December 4</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-left text-sm text-white font-bold leading-normal">
              Events Today
              <ul class="font-thin text-xs py-2">
              <li>12:00 Title of Event</li>
              <li>12:50 Title of Event</li>
              <li>12:30 Title of Event</li>
              </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    );
};

export default topBar;
