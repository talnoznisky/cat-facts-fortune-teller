const catfacts = [
  "A 2007 Gallup poll revealed that both men and women were equally likely to own a cat.",
  "A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.",
  "A cat called Dusty has the known record for the most kittens. She had more than 420 kittens in her lifetime.",
  "A cat can jump 5 times as high as it is tall.",
  "A cat can jump up to five times its own height in a single bound.",
  "A cat can spend five or more hours a day grooming himself.",
  "A cat can sprint at about thirty-one miles per hour.",
  "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.",
  "A cat cannot see directly under its nose.",
  "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
  "A cat has 230 bones in its body. A human has 206. A cat has no collarbone, so it can fit through any opening the size of its head.",
  "A cat has approximately 60 to 80 million olfactory cells (a human has between 5 and 20 million).",
  "A cat has more bones than a human being; humans have 206 and the cat has 230 bones.",
  "A cat has two vocal chords, and can make over 100 sounds.",
  "A cat lover is called an Ailurophilia (Greek: cat+lover).",
  "A cat named Dusty, aged 1 7, living in Bonham, Texas, USA, gave birth to her 420th kitten on June 23, 1952.",
  "A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face.The tail area and paws also carry the cat’s scent.",
  "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light.",
  "A cat uses its whiskers for measuring distances.  The whiskers of a cat are capable of registering very small changes in air pressure.",
  "A cat usually has about 12 whiskers on each side of its face.",
  "A cat will tremble or shiver when it is in extreme pain.",
  "A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet.",
  "A cat's brain is more similar to a man's brain than that of a dog.",
  "A cat's field of vision is about 200 degrees.",
  "A cat's hearing is much more sensitive than humans and dogs.",
  "A cat's jaw has only up and down motion; it does not have any lateral, side to side motion, like dogs and humans.",
  "A cat's normal temperature varies around 101 F // 38 C.",
  "A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through.",
  "A cats field of vision is about 185 degrees.",
  "A cat’s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34.",
  "A cat’s brain is biologically more similar to a human brain than it is to a dog’s. Both humans and cats have identical regions in their brains that are responsible for emotions.",
  "A cat’s eyesight is both better and worse than humans. It is better because cats can see in much dimmer light and they have a wider peripheral view. It’s worse because they don’t see color as well as humans do. Scientists believe grass appears red to cats.",
  "A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human.",
  "A cat’s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.",
  "A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.",
  "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
  "A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime.",
  "A domestic cat can run at speeds of 30 mph.",
  "A female cat is called a queen or a molly.",
  "A female cat will be pregnant for approximately 9 weeks or between 62 and 65 days from conception to delivery.",
  "A form of AIDS exists in cats.",
  "A group of cats is called a \"clowder\".",
  "A happy cat holds her tail high and steady.",
  "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
  "A kitten will typically weigh about 3 ounces at birth.  The typical male housecat will weigh between  7 and 9 pounds, slightly less for female housecats.",
  "A queen (female cat) can begin mating when she is between 5 and 9 months old.",
  "A sexually-active feral tom-cat \"owns\" an area of about three square miles and \"sprays\" to mark his territorywith strong smelling urine.",
  "A steady diet of dog food may cause blindness in your cat - it lacks taurine.",
  "A tiger's stripes are like fingerprints.",
  "A tomcat (male cat) can begin mating when he is between 7 and 10 months old.",
  "About 37% of American homes today have at least 1 cat.",
  "Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
  "According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.",
  "According to a Gallup poll, most American pet owners obtain their cats by adopting strays.",
  "After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.",
  "Ailurophile is the word cat lovers are officially called.",
  "All cats have claws, and all except the cheetah sheath them when at rest.",
  "All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads.",
  "All cats need taurine in their diet to avoid blindness. Cats must also have fat in their diet as they are unable to produceit on their own.",
  "Among many other diseases, cats can suffer from anorexia, senility, feline AIDS and acne.",
  "An adult lion's roar can be heard up to five miles (eight kilometers) away.",
  "Ancient Egyptian family members shaved their eyebrows in mourning when the family cat died.",
  "Approximately 1/3 of cat owners think their pets are able to read their minds.",
  "Approximately 24 cat skins can make a coat.",
  "Approximately 40,000 people are bitten by cats in the U.S. annually.",
  "At 4 weeks, it is important to play with kittens so that they do not develope a fear of people.",
  "Baking chocolate is the most dangerous chocolate to your cat.",
  "Blue-eyed, pure white cats are frequently deaf.",
  "Both humans and cats have identical regions in the brain responsible for emotion.",
  "British cat owners spend roughly 550 million pounds yearly on cat food.",
  "Cat bites are more likely to become infected than dog bites.",
  "Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible.",
  "Cat paws act as tempetature regulators, shock absorbers, hunting and grooming tools, sensors, and more.",
  "Cat's urine glows under a black light.",
  "Cats and kittens should be acquired in pairs whenever possible as cat families interact best in pairs.",
  "Cats are North America’s most popular pets: there are 73 million cats compared to 63 million dogs. Over 30% of households in North America own a cat.",
  "Cats are extremely sensitive to vibrations. Cats are said to detect earthquake tremors 10 or 15 minutes before humans can.",
  "Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs.",
  "Cats are subject to gum disease and to dental caries. They should have their teeth cleaned by the vet or the cat dentist once a year.",
  "Cats are the world's most popular pets, outnumbering dogs by as many as three to one.",
  "Cats bury their feces to cover their trails from predators.",
  "Cats can be right-pawed or left-pawed.",
  "Cats can be taught to walk on a leash, but a lot of time and patience is required to teach them. The younger the cat is, the easier it will be for them to learn.",
  "Cats can judge within 3 inches the precise location of a sound being made 1 yard away.",
  "Cats can jump up to 7 times their tail length.",
  "Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories.",
  "Cats can rotate their ears 180 degrees.",
  "Cats come back to full alertness from the sleep state faster than any other creature.",
  "Cats control the outer ear using 32 muscles; humans use 6.",
  "Cats dislike citrus scent.",
  "Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
  "Cats don’t have sweat glands over their bodies like humans do. Instead, they sweat only through their paws.",
  "Cats eat grass to aid their digestion and to help them get rid of any fur in their stomachs.",
  "Cats hate the water because their fur does not insulate well when it’s wet. The Turkish Van, however, is one cat that likes swimming. Bred in central Asia, its coat has a unique texture that makes it water resistant.",
  "Cats have \"nine lives\" thanks to a flexible spine and powerful leg and back muscles.",
  "Cats have 30 teeth (12 incisors, 10 premolars, 4 canines, and 4 molars), while dogs have 42. Kittens have baby teeth, whichare replaced by permanent teeth around the age of 7 months.",
  "Cats have 30 vertebrae (humans have 33 vertebrae during early development; 26 after the sacral and coccygeal regions fuse).",
  "Cats have 300 million neurons; dogs have about 160 million.",
  "Cats have 32 muscles that control the outer ear (compared to human's 6 muscles each). A cat can rotate its ears independently 180 degrees, and can turn in the direction of sound 10 times faster than those of the best watchdog.",
  "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).",
  "Cats have been domesticated for half as long as dogs have been.",
  "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.",
  "Cats have supersonic hearing.",
  "Cats have the largest eyes of any mammal.",
  "Cats lap liquid from the underside of their tongue, not from the top.",
  "Cats lived with soldiers in trenches, where they killed mice during World War I.",
  "Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.",
  "Cats make about 100 different sounds. Dogs make only about 10.",
  "Cats must have fat in their diet because they can't produce it on their own.",
  "Cats often overract to unexpected stimuli because of their extremely sensitive nervous system.",
  "Cats purr at the same frequency as an idling diesel engine, about 26 cycles per second.",
  "Cats respond better to women than to men, probably due to the fact that women's voices have a higher pitch.",
  "Cats respond most readily to names that end in an \"ee\" sound.",
  "Cats see six times better in the dark and at night than humans.",
  "Cats should not be fed tuna exclusively, as it lacks taurine, an essential nutrient required for good feline health.  Make sure you have the proper Pet supplies to keep your cat happy and healthy.",
  "Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. If you poke the tail of a sleeping cat, it will respond accordingly.",
  "Cats spend nearly 1/3 of their waking hours cleaning themselves.",
  "Cats step with both left legs, then both right legs when they walk or run.",
  "Cats take between 20-40 breaths per minute.",
  "Cats that live together sometimes rub each others heads to show that they have no intention of fighting. Young cats do thismore often, especially when they are excited.",
  "Cats walk on their toes.",
  "Cats with long, lean bodies are more likely to be outgoing, and more protective and vocal than those with a stocky build.",
  "Cats' eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.",
  "Cats' hearing is much more sensitive than humans and dogs.",
  "Cats' hearing stops at 65 khz (kilohertz); humans' hearing stops at 20 khz.",
  "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully.",
  "Cats, just like people, are subject to asthma. Dust, smoke, and other forms of air pullution in your cat's environment can be troublesome sources of irritation.",
  "Cheetahs do not roar, as the other big cats do. Instead, they purr.",
  "Contrary to popular belief, the cat is a social animal. A pet cat will respond and answer to speech, and seems to enjoy human companionship.",
  "Domestic cats spend about 70 percent of the day sleeping, and 15 percent of the day grooming.",
  "During the Middle Ages, cats were associated with withcraft, and on St. John’s Day, people all over Europe would stuff them into sacks and toss the cats into bonfires. On holy days, people celebrated by tossing cats from church towers.",
  "During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.",
  "Edward Lear, author of \"The Owl and the Pussycat\", is said to have had his new house in San Remo built to exactly the same specification as his previous residence, so that his much-loved tabby, Foss, would immediately feel at home.",
  "Every time you masturbate God kills a kitten. Please, think of the kittens.",
  "Every year, nearly four million cats are eaten in Asia.",
  "Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are righthanded, the remaining 10% of lefties also tend to be male.",
  "Florence Nightingale owned more than 60 cats in her lifetime.",
  "Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins. Though milk is not toxic, it can cause an upset stomach and gas. Tylenol and aspirin are extremely toxic to cats, as are manycommon houseplants. Feeding cats dog food or canned tuna that’s for human consumption can cause malnutrition.",
  "Fossil records from two million years ago show evidence of jaguars.",
  "Grown cats have 30 teeth. Kittens have about 26 temporary teeth, which they lose when they are about 6 months old.",
  "Heat occurs several times a year and can last anywhere from 3 to 15 days.",
  "If a cat is frightened, the hair stands up fairly evenly all over the body; when the cat is threatened or is ready to attack, the hair stands up only in a narrow band along the spine and tail.",
  "If they have ample water, cats can tolerate temperatures up to 133 °F.",
  "If your cat snores, or rolls over on his back to expose his belly, it means he trusts you.",
  "In 1888, more than 300,000 mummified cats were found an Egyptian cemetery. They were stripped of their wrappings and cartedoff to be used by farmers in England and the U.S. for fertilizer.",
  "In 1987, cats overtook dogs as the number one pet in America (about 50 million cats resided in 24 million homes in 1986). About 37% of American homes today have at least one cat.",
  "In Holland’s embassy in Moscow, Russia, the staff noticed that the two Siamese cats kept meowing and clawing at the walls of the building. Their owners finally investigated, thinking they would find mice. Instead, they discovered microphones hidden by Russian spies. The cats heard the microphones when they turned on.",
  "In Japan, cats are thought to have the power to turn into super spirits when they die. This may be because according to the Buddhist religion, the body of the cat is the temporary resting place of very spiritual people.",
  "In Siam, the cat was so revered that one rode in a chariot at the head of a parade celebrating the new king.",
  "In an average year, cat owners in the United States spend over $2 billion on cat food.",
  "In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
  "In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning.",
  "In contrast to dogs, cats have not undergone major changes during their domestication process.",
  "In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens.",
  "In multi-cat households, cats of the opposite sex usually get along better.",
  "In one stride, a cheetah can cover 23 to 26 feet (7 to 8 meters).",
  "In relation to their body size, cats have the largest eyes of any mammal.",
  "In the 1750s, Europeans introduced cats into the Americas to control pests.",
  "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white.",
  "In the largest cat breed, the average male weighs approximately 20 pounds.",
  "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.",
  "Isaac Newton invented the cat flap. Newton was experimenting in a pitch-black room. Spithead, one of his cats, kept opening the door and wrecking his experiment. The cat flap kept both Newton and Spithead happy.",
  "It has been scientifically proven that owning cats is good for our health and can decrease the occurrence of high blood pressure and other illnesses.",
  "It has been scientifically proven that stroking a cat can lower one's blood pressure.",
  "It may take as long as 2 weeks for a kitten to be able to hear well.  Their eyes usually open between 7 and 10 days, but sometimes it happens in as little as 2 days.",
  "Jaguars are the only big cats that don't roar.",
  "Julius Ceasar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
  "Kittens remain with their mother till the age of 9 weeks.",
  "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.",
  "Like birds, cats have a homing ability that uses its biological clock, the angle of the sun, and the Earth's magnetic field. A cat taken far from its home can return to it. But if a cat's owners move far from its home, the cat can't find them.",
  "Like humans, cats tend to favor one paw over another.",
  "Lions are the only cats that live in groups, called prides. Every female within the pride is usually related.",
  "Long, muscular hind legs enable snow leopards to leap seven times their own body length in a single bound.",
  "Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head.",
  "Many cats cannot properly digest cow's milk. Milk and milk products give them diarrhea.",
  "Many cats love having their forehead gently stroked.",
  "Many people in China consider cats a \"warming\" food that is perfect to eat during the winter.",
  "Miacis, the primitive ancestor of cats, was a small, tree-living creature of the late Eocene period, some 45 to 50 million years ago.",
  "Milk can give some cats diarrhea.",
  "Most cats adore sardines.",
  "Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.",
  "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding.",
  "Most cats sleep around 16 hours a day.",
  "Mountain lions are strong jumpers, thanks to muscular hind legs that are longer than their front legs.",
  "Neutering a cat extends its life span by two or three years.",
  "Neutering a male cat will, in almost all cases, stop him from spraying (territorial marking), fighting with other males (atleast over females), as well as lengthen his life and improve its quality.",
  "Not every cat gets \"high\" from catnip. Whether or not a cat responds to it depends upon a recessive gene.",
  "Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while walking. All species of wild cats hold their tail horizontally or tucked between their legs while walking.",
  "One reason that kittens sleep so much is because a growth hormone is released only during sleep.",
  "People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.",
  "Perhaps the most famous comic cat is the Cheshire Cat in Lewis Carroll’s Alice in Wonderland. With the ability to disappear, this mysterious character embodies the magic and sorcery historically associated with cats.",
  "Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.",
  "Purring does not always indicate that a cat is happy. Cats will also purr loudly when they are distressed or in pain.",
  "Relative to its body size, the clouded leopard has the biggest canines of all animals’ canines. Its dagger-like teeth can be as long as 4.5 cm (1.8 in).",
  "Researchers are unsure exactly how a cat purrs. Most veterinarians believe that a cat purrs by vibrating vocal folds deep in the throat. To do this, a muscle in the larynx opens and closes the air passage about 25 times per second.",
  "Researchers believe the word “tabby” comes from Attabiyah, a neighborhood in Baghdad, Iraq. Tabbies got their name because their striped coats resembled the famous wavy patterns in the silk produced in this city.",
  "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
  "Siamese kittens are born white because of the heat inside the mother's uterus before birth. This heat keeps the kittens' hair from darkening on the points.",
  "Since cats are so good at hiding illness, even a single instance of a symptom should be taken very seriously.",
  "Smuggling a cat out of ancient Egypt was punishable by death. Phoenician traders eventually succeeded in smuggling felines, which they sold to rich people in Athens and other important cities.",
  "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by “crossing” its eyes.",
  "Some cats have survived falls of over 65 feet (20 meters), due largely to their “righting reflex.” The eyes and balance organs in the inner ear tell it where it is in space so the cat can land on its feet. Even cats without a tail have this ability.",
  "Some common houseplants poisonous to cats include English Ivy, Iris, Mistletoe, Philodendron, and Yew.",
  "Some notable people who disliked cats:  Napoleon Bonaparte, Dwight D. Eisenhower, Hitler.",
  "Spanish-Jewish folklore recounts that Adam’s first wife, Lilith, became a black vampire cat, sucking the blood from sleeping babies. This may be the root of the superstition that a cat will smother a sleeping baby or suck out the child’s breath.",
  "Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs.",
  "Tests done by the Behavioral Department of the Musuem of Natural History conclude that while a dog's memory lasts about 5 minutes, a cat's recall can last as long as 16 hours.",
  "The Amur leopard is one of the most endangered animals in the world.",
  "The Ancient Egyptian word for cat was mau, which means \"to see\".",
  "The Egyptian Mau is probably the oldest breed of cat. In fact, the breed is so ancient that its name is the Egyptian word for \"cat\".",
  "The Maine Coon cat is America's only natural breed of domestic feline. It is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
  "The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
  "The Maine Coone is the only native American long haired breed.",
  "The Pilgrims were the first to introduce cats to North America.",
  "The ability of a cat to find its way home is called “psi-traveling.” Experts think cats either use the angle of the sunlight to find their way or that cats have magnetized cells in their brains that act as compasses.",
  "The ancestor of all domestic cats is the African Wild Cat which still exists today.",
  "The average cat food meal is the equivalent to about five mice.",
  "The average lifespan of an outdoor-only cat is about 3 to 5 years while an indoor-only cat can live 16 years or much longer.",
  "The average litter of kittens is between 2 - 6 kittens.",
  "The biggest wildcat today is the Siberian Tiger. It can be more than 12 feet (3.6 m) long (about the size of a small car) and weigh up to 700 pounds (317 kg).",
  "The cat appears to be the only domestic companion animal not mentioned in the Bible.",
  "The cat has 500 skeletal muscles (humans have 650).",
  "The cat who holds the record for the longest non-fatal fall is Andy. He fell from the 16th floor of an apartment building (about 200 ft/61 m) and survived.",
  "The cat's clavicle, or collarbone, does not connect with other bones but is buried in the muscles of the shoulder region. This lack of a functioning collarbone allows them to fit through any opening the size of their head.",
  "The cat's footpads absorb the shocks of the landing when the cat jumps.",
  "The cat's front paw has 5 toes, but the back paws have 4. Some cats are born with as many as 7 front toes and extra back toes (polydactl).",
  "The cat's tail is used to maintain balance.",
  "The cheetah is the world's fastest land mammal. It can run at speeds of up to 70 miles (113 kilometers) an hour.",
  "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
  "The claws on the cat’s back paws aren’t as sharp as the claws on the front paws because the claws in the back don’t retract and, consequently, become worn.",
  "The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the Proailurus, which means “first cat” in Greek. The group of animals that pet cats belong to emerged around 12 million years ago.",
  "The female cat reaches sexual maturity within 6 to 10 months; most veterinarians suggest spaying the female at 5 months, before her first heat period. The male cat usually reaches sexual maturity between 9 and 12 months.",
  "The first cartoon cat was Felix the Cat in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon “Puss Gets the Boot.” In 1981 Andrew Lloyd Weber created the musical Cats, based on T.S. Eliot’s Old Possum’s Book of Practical Cats.",
  "The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”). In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip.",
  "The first cat show was in 1871 at the Crystal Palace in London.",
  "The first commercially cloned pet was a cat named \"Little Nicky\". He cost his owner $50,000, making him one of the most expensive cats ever.",
  "The first true cats came into existence about 12 million years ago and were the Proailurus.",
  "The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat.",
  "The heaviest cat on record is Himmy, a Tabby from Queensland, Australia. He weighed nearly 47 pounds (21 kg). He died at the age of 10.",
  "The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k). Females weigh between 10 and 15 lbs (4.5-6.8 k).",
  "The leopard is the most widespread of all big cats.",
  "The life expectancy of cats has nearly doubled since 1930 - from 8 to 16 years.",
  "The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.",
  "The little tufts of hair in a cat’s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called \"ear furnishings\".",
  "The most expensive cat was an Asian Leopard cat (ALC)-Domestic Shorthair (DSH) hybrid named Zeus. Zeus, who is 90% ALC and 10% DSH, has an asking price of £100,000 ($154,000).",
  "The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.",
  "The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km).",
  "The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\".",
  "The oldest cat on record was Crème Puff from Austin, Texas, who lived from 1967 to August 6, 2005, three days after her 38th birthday. A cat typically can live up to 20 years, which is equivalent to about 96 human years.",
  "The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to218 kittens.",
  "The richest cat is Blackie who was left £15 million by his owner, Ben Rea.",
  "The silks created by weavers in Baghdad were inspired by the beautiful and varied colors and markings of cat coats. These fabrics were called \"tabby\" by European traders.",
  "The smallest pedigreed cat is a Singapura, which can weigh just 4 lbs (1.8 kg), or about five large cans of cat food. The largest pedigreed cats are Maine Coon cats, which can weigh 25 lbs (11.3 kg), or nearly twice as much as an average cat weighs.",
  "The smallest wildcat today is the Black-footed cat. The females are less than 20 inches (50 cm) long and can weigh as little as 2.5 lbs (1.2 kg).",
  "The strongest climber among the big cats, a leopard, can carry prey twice its weight up a tree.",
  "The technical term for a cat’s hairball is a \"bezoar\".",
  "The term “puss” is the root of the principal word for “cat” in the Romanian term pisica and the root of secondary words in Lithuanian (puz) and Low German puus. Some scholars suggest that “puss” could be imitative of the hissing sound used to get a cat’s attention. As a slang word for the female pudenda, it could be associated with the connotation of a cat being soft, warm, and fuzzy.",
  "The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 kg) and was 6.1 inches (15.5 cm) high.",
  "The way you treat kittens in the early stages of it's life will render it's personality traits later in life.",
  "The world’s rarest coffee, Kopi Luwak, comes from Indonesia where a wildcat known as the luwak lives. The cat eats coffee berries and the coffee beans inside pass through the stomach. The beans are harvested from the cat’s dung heaps and then cleanedand roasted. Kopi Luwak sells for about $500 for a 450 g (1 lb) bag.",
  "There are approximately 60,000 hairs per square inch on the back of a cat and about 120,000 per square inch on its underside.",
  "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
  "There are up to 60 million feral cats in the United States alone.",
  "There is a species of cat smaller than the average housecat. It is native to Africa and it is the Black-footed cat (Felis nigripes). Its top weight is 5.5 pounds.",
  "Tigers are excellent swimmers and do not avoid water.",
  "Two members of the cat family are distinct from all others: the clouded leopard and the cheetah. The clouded leopard does not roar like other big cats, nor does it groom or rest like small cats. The cheetah is unique because it is a running cat; all others are leaping cats. They are leaping cats because they slowly stalk their prey and then leap on it.",
  "Tylenol and chocolate are both poisionous to cats.",
  "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
  "Unlike humans, cats do not need to blink their eyes on a regular basis to keep their eyes lubricated.",
  "Unlike other cats, lions have a tuft of hair at the end of their tails.",
  "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
  "When a cat drinks, its tongue - which has tiny barbs on it - scoops the liquid up backwards.",
  "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership.",
  "When a domestic cat goes after mice, about 1 pounce in 3 results in a catch.",
  "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
  "While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia black cats are considered lucky.",
  "You check your cats pulse on the inside of the back thigh, where the leg joins to the body.",
  "In 1987 cats overtook dogs as the number one pet in America.",
  "Auxim's cat Lotje is not only lazy, but also incredibly lazy."
]
