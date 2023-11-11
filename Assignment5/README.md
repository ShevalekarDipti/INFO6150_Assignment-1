This README explains the SCSS variables and styles used in the provided code:

The website provides amalgamation of different recipes from India. It also provides, ratings of the dishes prepared. updates weekely favourites.

1. Favicon: The website's favicon is linked to "./images/WebsiteLogo.jpeg".
2. External CSS: The website's styles are defined in an external CSS file linked as "./css/style.css".
3. Video: A video is included in the "Beverages" section linked to "./images/FoodVdo.mp4".
4. Hyperlinks: The code includes various hyperlinks to different sections and external websites.

5. Imports - The @import rule allows you to include external SCSS files within your main SCSS file. In this code, it imports the "utilities," "mobile," and "config" SCSS files for reusing styles and variables defined in those files.

6. Mixins - text-style Mixin-
Mixins are reusable blocks of styles that can be included in other selectors.
The text-style mixin sets the font-family, font-size, and text color based on the arguments passed when it's included.

7. link-style Mixin - The link-style mixin sets the color and text-decoration properties for links.

8. Pseudo-Selectors - :hover Pseudo-selector -
The :hover pseudo-selector defines styles for an element when it is hovered over by the mouse pointer.


9. Nested Selectors- 
.main-menu {
  a {
    font-size: 16pt;
    color: rgb(79, 37, 3);
    margin: 10px;
    text-decoration: none;
  }
}
In this code block, a is nested within the .main-menu selector. This allows you to target a elements specifically within elements with the .main-menu class.

10. Parent Selector (&) - 
&:hover {
  border-bottom: 2px solid pink;
  cursor: url("./Navigation/clicker.png"), auto;
}
The & represents the parent selector. In this case, it refers to the .main-menu selector, so the styles are applied to .main-menu when it's hovered over.


11. Variables
$color-primary: Defined as rgb(221, 88, 152), this variable holds the primary color for the website's hero banner.
$padding-large, $padding-medium, $padding-small: These variables hold different padding values to be used for various elements on the website.
$margin-large, $margin-medium, $margin-small: These variables define margin values for spacing.
$bottom-border: Specifies the style for the bottom border on the main menu when hovered over.
$bg-clr: Defines the background color for the "Go to Recipe" button.
$primary-bg-color: Stores the primary background color for the website.
$secondary-bg-color: Holds the secondary background color for the website.
$heading-font: Specifies the font for headings.
$heading-color: Defines the color for headings.
$text-font: Stores the font for text.
$title-font: Specifies the font for titles.

12. Recipes - Styles
.hero-banner
The .hero-banner selector defines styles for the website's hero banner.
It sets the padding to $padding-small and the background-color to $color-primary.
.main-menu
The .main-menu selector defines styles for the main menu of the website.
It targets anchor (a) elements within the menu and sets their font-size, color, margin, and text-decoration.
When a menu item is hovered over, it applies a border-bottom with the style defined by the $bottom-border variable and changes the cursor.
.go-to-recipe-btn
The .go-to-recipe-btn selector defines styles for the "Go to Recipe" button.
It sets the background-color to $bg-clr, font-size to 14pt, and padding to create a button-like appearance.
When the button is hovered over, it changes the background-color and cursor to indicate interactivity.
These variables and styles make it easy to maintain and change the appearance of your website, ensuring consistency and a visually appealing design. You can adjust the variable values to fine-tune the styling of different elements on your website.

13. Buttons.scss -
    This file has all the styles related to buttons in the html page and has been imported into the style.scss.

14. Mobile.scss -
    This file has all the variables and header part css included in it.

15. Inheritance feature of scss has been used in the useful links div in the style.scss.
16. config.scss-
    This file has all the css related to main container of the page.

These features make the SCSS code more maintainable and efficient, enabling you to define and reuse styles, making it easier to create a consistent and visually appealing website.
