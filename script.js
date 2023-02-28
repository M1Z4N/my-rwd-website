// Creating new map

const lorem = new Map();

// Setting up values for map lorem

lorem.set(20,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quisquam nobis ipsam cupiditate facilis animi aliquid vitae accusamus provident optio!");
lorem.set(40,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, assumenda! Deserunt, neque dolorum? Minima, sit? Error quaerat quisquam neque nesciunt assumenda odio, fugit officia modi unde ullam animi molestias laborum et sed earum harum autem delectus perspiciatis doloremque eius vero.");
lorem.set(60,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aperiam aliquam dolor facere omnis, at provident deserunt recusandae minus dolores delectus amet nulla eius maiores magnam obcaecati atque et rerum deleniti quisquam voluptatibus odit? Esse aliquid vero fugiat quas reprehenderit repellendus, debitis minus dolore sit quae nisi! Itaque aperiam blanditiis ab quo, similique deleniti, veniam eligendi porro, necessitatibus recusandae temporibus?");
lorem.set(100,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed doloremque dignissimos molestias dolore perferendis quae, praesentium animi eveniet minima asperiores commodi neque ipsum laboriosam velit reprehenderit nemo earum repellat quia, vitae consequatur autem libero! Numquam incidunt ducimus quam, optio dolorem vero cupiditate sit laboriosam sint obcaecati exercitationem eum molestias id porro libero iste, magnam consequatur provident unde, nemo temporibus quasi! Placeat tenetur, exercitationem odit corrupti quibusdam repellat vel totam nobis rem nemo mollitia enim maxime? Quisquam omnis corrupti tenetur perspiciatis error? Esse reprehenderit repellat veniam quia deserunt eaque. Unde consequatur praesentium laborum, rerum asperiores illo atque molestias repellat quibusdam?");

// Function onclick for buttons, setting up specific values from map lorem inside article tag
function loremfunc(x) {
    document.getElementById("loremh").innerHTML = "Lorem ipsum " + x; 
    document.getElementById("loremp").innerHTML = lorem.get(x);
}