import Product from './productModel.js';
import Cart from './cartModel.js'
const products = [new Product(1,'Balenciaga','Triple S',1010,12,'Desc...','France'),
                    new Product(2,'Prada','Cloudbust',687,19,'Desc...','Italy'),
                    new Product(3,'Versace','Chain Reaction',1165,5,'Desc...','Italy'),
                    new Product(4,'Gucci','Flashtrek',956,2,'Desc...','Italy'),
                    new Product(5,'Maison Margiela','Fusion',1287,3,'Desc...','France'),
                    new Product(6,'Balenciaga','Track',865,23,'Desc...','France'),
                    new Product(7,'Calvin Klein 205W39NYC','Srike 205',705,5,'Desc...','United States'),
                    new Product(8,'Jordan','Jordan x Spike Lee Spizike',171,31,'Desc...','United States'),
                    new Product(9,'Gucci','Rython',1004,12,'Desc...','Italy'),
                    new Product(10,'Nike','Air Force 1',109,46,'Desc...','United States'),
                    new Product(11,'Fendi','Fendi Mania',799,17,'Desc...','Italy'),
                    new Product(12,'Adidas','Yeezy Boost 350 V2 Static',855,19,'Desc...','Germany'),
                    new Product(13,'Gucci','Rython Web',956,7,'Desc...','Italy'),
                    new Product(14,'Jordan','Air Jordan 12 RTR Michigan',370,24,'Desc...','United States'),
                    new Product(15,'Calvin Klein 205W39NYC','Cander 7',598,25,'Desc...','United States'),
                    new Product(16,'Adidas','Yeezy Boost 700 V2 Static',744,16,'Desc...','Germany'),
                    new Product(17,'Balenciaga','Triple S',1015,18,'Desc...','France'),
                    new Product(18,'Nike','Nike Air VaporMax x Off-White',851,14,'Desc...','United States'),
                    new Product(19,'Maison Margiela','Artisanal',910,14,'Desc...','France'),
                    new Product(20,'Burberry','Vintage',419,29,'Desc...','United Kingdom')];

var cart = new Cart();

export { products , cart };