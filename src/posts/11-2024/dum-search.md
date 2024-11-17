---
title: "Dum Search: my Google Web search tool"
---

Earlier this year, Google introduced a new "Web" search filter. The Web filter functions similar to the "Images" or "Videos" filter, but instead refines the results to just show links (like how Google used to be).

If you've used Google recently, you've probably noticed the search results now have AI Overviews, "People Also Ask," and other quick info features taking up most of the page. These are all designed to take info from the web and present it to you in a quick and easy format, but also... **keep you in Google's ecosystem**.

A lot of websites are dependent on traffic from Google. But now, users are getting more information directly on Google and not clicking through to websites, which is conveniently helping Google's bottom line but at the expense of the millions of websites who rely on the traffic. Needless to say, this is causing some strife amongst website owners and Google.

In an attempt to quell these concerns, Google tossed the web a bone with the Web filter, which removes all of the various search features and just gives you traditional links to websites. This allows a user to search the web more directly, helping give some traffic back to websites.

I personally enjoy surfing the web and browsing websites themselves. If I'm researching a topic that interests me, I actually prefer going down the search results, clicking on several links, spending some time on the websites, and synthesizing the information from each myself. So, this new Web filter is exactly the kind of feature I would utilize.

Unfortunately, since the Web filter doesn't benefit Google's current AI initiatives, it's not always easily accessible from the Google search interface or something you can set as your default search functionality. That said, it IS enabled by a simple URL parameter (udm=14) added to a Google search query. Which got me thinking...

I could easily create my own search interface that automatically applies the Web filter URL parameter, creating a search experience that feels like old-school Google. Sure enough, with a basic HTML search input and some Javascript, I got the functionality I was looking for.

Then, while pondering this idea in the shower, the name came to me. If AI chatbots are the "intelligent" way of searching for information, then the traditional list of links to websites must be a "dumb" way of searching. Dumbsearch.com was taken, but then I realized "Dum" is sort of an anagram for the "**udm**=14" Web filter URL parameter. Dumsearch.com was available, and like that, [Dum Search](https://dumsearch.com/) was born.

So essentially, Dum Search is just a basic webpage that sort of looks like google.com, and when you search something, it redirects your search to Google with the Web filter automatically applied. This saves you from having to find and click on the Web filter after already searching on Google. It's just a silly tool, but it's amazing how refreshingly simple the experience is. You search something and get a list of website links back with nothing else there to distract you.

Dum Search was really just a fun weekend project for me. I don't have any tracking analytics on the site, so feel free to use it with peace of mind. [Try it out](https://dumsearch.com/) and let me know what you think! You can also [view the source code on GitHub](https://github.com/cameronkoester/dum-search) and make your own version if you want.
