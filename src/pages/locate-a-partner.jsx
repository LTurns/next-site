import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-12";
import Map from "@components/map.tsx";
import whereToBuy from "../data/whereToBuy.json";
import HowToBuy from "@components/how-to-buy";
import SectionTitle from "@components/section-title/layout-02";

const locations = [
    { lat: 37.7749, lng: -122.4194, label: "A" },
    { lat: 37.7849, lng: -122.4094, label: "B" },
    { lat: 37.7649, lng: -122.4294, label: "C" },
];

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
    Math.sin(dLon/2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function findClosestDistributor(country, distributors) {
  const user = countryCoordinates[country];
  if (!user) return null;

  return distributors.reduce((closest, dist) => {
    const distance = haversine(user.lat, user.lon, dist.lat, dist.lng);
    return (!closest || distance < closest.distance)
      ? { ...dist, distance }
      : closest;
  }, null);
}

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Product = () => (
    <Wrapper>
        <SEO pageTitle="Locate A Partner" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Locate A Partner" currentPage="Locate A Partner" />
            <HowToBuy />
        </main>
        <Footer />
    </Wrapper>
);

export default Product;
