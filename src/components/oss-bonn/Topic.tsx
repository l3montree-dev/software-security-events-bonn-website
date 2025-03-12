export default function Topic() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-l3-600">
                The Topic
              </h2>
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                Is Open Source Crucial for the Future of Technology? How can we
                as a community tackle security, policy, and business models and
                shape the evolution of OSS.
              </h3>
              <p className="margin-bottom: 15px mt-6 text-base leading-8 text-zinc-800">
                Open source is no longer just a development philosophy; it is at
                the heart of global technological advancements. However, as the
                adoption of open source continues to grow, so too do the
                challenges related to security, governance, and its integration
                into business operations. In this session, we will address:
              </p>
              <ul className="margin-bottom: 15px; mt-6 text-base leading-8 text-zinc-800">
                <li className="margin-bottom: 15px; mt-6 text-base leading-8 text-zinc-800">
                  <strong>Open Source Security:</strong> How can we ensure that
                  open source projects remain secure in an increasingly complex
                  and hostile digital landscape? What are the tools, strategies,
                  and best practices for managing open source security risks?
                </li>

                <li className="margin-bottom: 15px; mt-6 text-base leading-8 text-zinc-800">
                  <strong>Open Source Policies:</strong> What role do
                  policymakers play in shaping the future of open source in
                  Europe and globally? How can governments and institutions
                  foster an ecosystem that promotes innovation while
                  safeguarding public and private interests?
                </li>

                <li className="margin-bottom: 15px; mt-6 text-base leading-8 text-zinc-800">
                  <strong>Open Source as a Business Model:</strong> Open source
                  is no longer just a tech movement; it&apos;s a sustainable
                  business model for many organizations. We&apos;ll explore
                  successful open source business strategies, monetization
                  models, and how companies can build and maintain thriving
                  businesses around open source.
                </li>
              </ul>

              <p className="margin-bottom: 15px; mt-6 text-base leading-8 text-zinc-800">
                Join us for this dynamic session where we&apos;ll not only
                highlight the latest challenges and opportunities but also pave
                the way for collaboration across sectors to drive the future of
                open source forward with confidence and security. Whether
                you&apos;re a developer, policymaker, business leader, or open
                source enthusiast, this is an event you won&apos;t want to miss.
              </p>

              <p className="mt-6 text-base leading-8 text-zinc-800">
                We look forward to an engaging and thought-provoking discussion
                in Bonn as part of the EU Open Source Week!
              </p>
            </div>
          </div>
          <img
            src="../oss-event.png"
            className="w-[48rem] max-w-none rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 lg:block"
            width={1216}
            height={721}
            alt="OSS Event"
          />
        </div>
      </div>
    </div>
  )
}
