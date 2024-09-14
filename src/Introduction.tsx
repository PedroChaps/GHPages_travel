// Represents the introduction section within the app.

function Introduction() {
    
    return (
        <div>
        <h2>Introduction</h2>
          
        <div className="introduction">
          
          <p>Welcome!! :D</p>
          <p>As I like to keep track of the cool places I’ve been to, and after being given this idea by a colleague, I decided to create lists!

  Instead of sharing lists “on-demand”, I’ve created this page which acts as a centralized source of my Google Maps lists.</p>

          <p> This page and the lists are organized in the following way:</p>

          <ul className="list-disc list-outside ml-6">
            <li>The page contains a section per country</li>
            <li>Each country has a set of lists</li>
            <li>Currently, each set of lists has the following types of places:</li>
            <ul className="list-decimal list-outside ml-12 mt-1">
              <li> <code className="bg-gray-200 px-1 rounded-md text-red-600">entertainment/</code> - Places that offer some kind of activity (e.g., disco, pool, beach, etc.)</li>
              <li><code className="bg-gray-200 px-1 rounded-md text-red-600">hotels/</code> - Places to sleep</li>
              <li><code className="bg-gray-200 px-1 rounded-md text-red-600">restaurants/</code> - Places that serve lunch or dinner</li>
              <li><code className="bg-gray-200 px-1 rounded-md text-red-600">food/</code> - Places that serve other kinds of food (e.g., snacks, ice cream, etc.)</li>
              <li><code className="bg-gray-200 px-1 rounded-md text-red-600">services/</code> - Places that offer some kind of non-entertaining service (e.g., hairdresser, repair shop, mechanic, etc.)</li>
              <li><code className="bg-gray-200 px-1 rounded-md text-red-600">sights/</code> - Places that look cool, mainly for walking around and seeing the stuff</li>
            </ul>
            <li> For each type, the following states exist:</li>
              <ul className="list-decimal list-outside ml-12 mt-1">
                <li><code className="bg-gray-200 px-1 rounded-md text-red-600">liked</code> - Places I liked</li>
                <li><code className="bg-gray-200 px-1 rounded-md text-red-600">disliked</code> - Places I disliked</li>
                <li><code className="bg-gray-200 px-1 rounded-md text-red-600">recommended</code> - Places I was recommended or have interest in going</li>
              </ul>
            <li>Each country also has a list that aggregates all the liked and the recommended places of all types.</li>
          </ul>
          
          <p>This organization allows for the following:</p>
          
         <ul className="list-disc list-outside ml-6">
            <li>If you want to have a general idea of the places of a specific country, you can access the “general country” list</li>
            <li>if only looking for a type of place specifically, you can enter that list and not be overloaded with irrelevant information</li>
            <li>Within a list, you can sort by distance to you. So, e.g., if looking for lunch in a place I like, you can enter the related list and find the closest restaurants to you</li>
            <li>After visiting a place under recommended, I will move it to the liked or disliked lists accordingly</li>
          </ul>

          <p>Other notes:</p>


          <ul className="list-disc list-outside ml-6">
            <li>The lists are not exhaustive → I have by far explored any country to its fullest, so I’ll always be adding new places</li>
            <li>The lists are lazily created (like how Jinja2 evaluates stuff): I only create a specific list when I have something to add to that list (e.g., I will only create a IE/restaurants/recommended list once I get a recommendation of a restaurant in Ireland)</li>
            <li>I am a very positive person, so it’s rare to see disliked lists :D</li>
            <li>Some places have a comment on why they were added to the list / why they are good</li>
            <li>Some places are in the multiple lists (e.g., a beach that is also very beautiful to sightsee)</li>
            <li>If you have cool places you recommend, let me know and I’ll add them to the related lists!</li>
            <li>Google Maps doesn’t provide an API so this has to be done by hand :( <br/> May the effort be worth it to you!</li>
          </ul>
          
        </div>
        </div>
    );
}

export default Introduction;