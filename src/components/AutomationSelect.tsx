import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const jobOptions = [
  { id: 1, name: 'Apply with Winq' },
  { id: 2, name: 'Apply manually' },
  { id: 3, name: 'Find more jobs like this' },
  { id: 4, name: 'Remove - not a match' },
  { id: 5, name: 'Snooze - temporarily ignore' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AutomationSelect() {
    const [selected, setSelected] = useState(jobOptions[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-3">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10  text-sm leading-6 text-left text-purple-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-800">
              <span className="block truncate">{selected?.name ?? ""}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {jobOptions.map((job) => (
                  <Listbox.Option
                    key={job.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-pink-800 text-white' : 'text-purple-800',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={job}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {job.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
