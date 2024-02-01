/* eslint-disable no-unused-vars */
import "./App.css";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-incicator";
import QRCodeGenerator from "./components/qr-code-generator";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/start-rating";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-app";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordian /> */}

      {/* Generate Random Color component */}
      {/* <RandomColor /> */}

      {/* Star Rating components */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more data component */}
      {/* <LoadMoreData /> */}

      {/* TRee View component */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator component */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode component */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products"} /> */}

      {/* Custom tabs component */}
      {/* <TabTest /> */}

      {/* Custom Modal Popup component */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder component */}
      {/* <GithubProfileFinder /> */}

      {/* Search autocomplete component */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe component */}
      {/* <TicTacToe /> */}

      {/* Feature Flags Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch Custom Hook test */}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclick outside hook test */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use window resize hook test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to top and button */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to a partcular section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
