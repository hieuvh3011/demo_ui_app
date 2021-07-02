import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Colors from '@app/utils/colors';
import Header from '@app/components/common/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  chatIcon,
  defaultArticleImage,
  demoArticleImage,
  likeIcon,
  shareIcon,
  unlikeIcon,
} from '@app/assets/images';
import {textStyle} from '@app/utils/TextStyles';
import AppModal from '@app/components/common/AppModal';
import AppButton from '@app/components/common/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import {pressLikeArticle} from '@app/redux/hot_topic/HotTopic.action';
import Loading from '@app/components/common/Loading';
import Toast from 'react-native-toast-message';

const ArticleDetailsScreen = props => {
  const hotTopicReducer = useSelector(state => state?.hotTopic);
  const articleTitle = hotTopicReducer?.selectedArticle?.title;
  const topicName = hotTopicReducer?.selectedTopic?.text;
  const {selectedArticle} = hotTopicReducer;
  const [isShowContactModal, setShowContactModal] = useState(false);
  const contactFormRef = useRef(null);
  const dispatch = useDispatch();
  const [isLoadingSendComment, setLoadingSendComment] = useState(false);

  const onPressChat = () => {
    setShowContactModal(true);
  };

  const onPressShare = () => {
    const shareOption = {
      message: 'Test share function',
      title: 'Share this article',
    };
    Share.open(shareOption)
      .then(res => console.log('share res = ', res))
      .catch(error => console.log('share error = ', error));
  };

  const onPressLike = () => {
    dispatch(pressLikeArticle(selectedArticle));
  };

  const _onPressCloseModal = () => {
    setShowContactModal(false);
  };

  const focusOnContactForm = () => contactFormRef.current.focus();

  const _onPressSendComment = () => {
    setLoadingSendComment(true);
    setTimeout(() => {
      setLoadingSendComment(false);
    }, 2000);
    setTimeout(() => {
      setShowContactModal(false);
    }, 2100);
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Sent',
      visibilityTime: 4000,
      bottomOffset: 100,
    });
  };

  const _renderContactModal = () => {
    if (isShowContactModal) {
      return (
        <AppModal animationType={'fade'}>
          <View style={styles.chatModal}>
            <ScrollView style={styles.list}>
              <Text style={styles.contactUs}>Contact Us</Text>
              <Text
                style={
                  styles.largeText
                }>{`Feel free to comment on "${topicName}"!`}</Text>
              <View style={styles.form}>
                <Text style={styles.subjectTitle}>Subject Title</Text>
                <Text style={styles.topicName}>{selectedArticle.title}</Text>
              </View>
              <Pressable style={styles.largeForm} onPress={focusOnContactForm}>
                <Text style={styles.subjectTitle}>Body</Text>
                <TextInput
                  ref={ref => (contactFormRef.current = ref)}
                  multiline={true}
                  placeholder={'Type Here...'}
                  placeholderTextColor={Colors.textInput}
                  style={styles.topicName}
                />
              </Pressable>
              <AppButton
                style={styles.sendMessageButton}
                onPress={_onPressSendComment}>
                <Icon name={'send'} size={scale(20)} color={Colors.white} />
                <Text style={styles.sendMessageText}>Send Message</Text>
              </AppButton>
              <View style={styles.blank} />
              <AppButton
                style={styles.finishButton}
                text={'Finish'}
                onPress={_onPressCloseModal}
              />
            </ScrollView>
            <TouchableOpacity
              style={styles.close}
              activeOpacity={0.8}
              hitSlop={{
                top: 20,
                bottom: 20,
                left: 20,
                right: 20,
              }}
              onPress={_onPressCloseModal}>
              <Icon name={'close'} size={scale(25)} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          {isLoadingSendComment && <Loading loadingText={'Sending message'} />}
        </AppModal>
      );
    }
    return <View />;
  };

  const _renderInteract = () => {
    return (
      <View style={styles.interactArea}>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressLike}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}>
            <Image
              source={selectedArticle?.isLike ? likeIcon : unlikeIcon}
              style={styles.likeIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>

          <Text
            style={styles.likeText}>{`${selectedArticle.likes} likes`}</Text>
        </View>
        <View style={styles.row}>
          {_renderInteractButton(chatIcon, onPressChat)}
          {_renderInteractButton(shareIcon, onPressShare)}
        </View>
      </View>
    );
  };

  const _renderInteractButton = (iconSource, onPress) => {
    return (
      <TouchableOpacity
        style={styles.interactButton}
        activeOpacity={0.8}
        onPress={onPress}>
        <Image
          source={iconSource}
          style={styles.interactIcon}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header hasBackLeft={true} hasRight={true} centerText={topicName} />
      <>
        <ScrollView style={styles.list} contentContainerStyle={styles.padding}>
          <Image source={demoArticleImage} style={styles.image} />
          <Text style={styles.title}>{articleTitle}</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad enim
            iure laboriosam molestias pariatur. A, accusamus asperiores atque
            deserunt dignissimos dolor dolore doloremque eligendi eveniet
            excepturi exercitationem facere iste minima minus molestiae nam nemo
            nisi nobis non praesentium ratione rerum sapiente, sed sint soluta
            vel voluptas! Eligendi facere harum hic libero perspiciatis quae
            repellendus, ut. Aliquam dolores expedita nulla? Amet aut fugit nemo
            voluptas! Assumenda doloribus ducimus error fugiat harum laboriosam,
            natus nisi officia, quasi ratione temporibus vel velit. Aperiam
            deserunt facere incidunt ipsam iusto nobis rem tempore, totam! A
            accusantium aliquid amet at consectetur cum doloremque, enim
            expedita id impedit iure maxime nostrum nulla officia placeat
            quaerat quia quod rem repudiandae voluptas. Alias cupiditate dicta
            dolores eligendi est exercitationem fugiat harum ipsam laborum minus
            nam nulla, omnis optio pariatur possimus rem sed sit, unde vero,
            voluptas. Ad et expedita explicabo fugit inventore ipsam natus neque
            nihil non optio, perferendis rem repellat voluptas voluptate
            voluptatem? Culpa cupiditate ea excepturi incidunt ipsam ipsum iusto
            magnam maiores neque officia, omnis praesentium quas quasi qui quo
            repellat, repudiandae sit. Beatae consequuntur deserunt doloremque,
            eligendi est hic laboriosam magnam maiores minus modi odio quidem
            sunt suscipit! A accusamus alias amet aperiam eligendi est expedita
            explicabo, harum odit perferendis perspiciatis quibusdam sapiente
            voluptates! A ab aliquam aut, autem beatae debitis delectus deleniti
            distinctio eaque eius enim et eveniet explicabo impedit in ipsa
            ipsam labore nobis numquam pariatur recusandae repudiandae rerum
            sequi sunt temporibus tenetur voluptates? Accusamus animi dolorem
            eligendi harum in ipsam iure iusto molestiae nam nobis nostrum,
            perferendis placeat porro quasi quo ratione totam. Alias aspernatur
            atque culpa debitis, deleniti dolorem eum exercitationem fugiat
            harum id ipsa ipsam labore magni molestiae molestias nihil,
            officiis, praesentium quo repellat sed sit tempore velit voluptate
            voluptatem voluptatibus! Atque consectetur culpa dolorum excepturi
            harum obcaecati omnis pariatur sit tenetur unde. Ab, accusamus aut
            autem cum, ducimus inventore labore laboriosam laborum minus
            necessitatibus nobis odio praesentium rem sit voluptatum. Corporis
            deleniti, distinctio dolor dolorem ducimus, eos excepturi fugit
            incidunt non odio rem reprehenderit, repudiandae sed! Adipisci alias
            amet architecto blanditiis commodi consectetur consequatur cum
            debitis doloremque dolores dolorum ea earum eius et ex expedita
            incidunt ipsa, labore libero numquam odio, omnis perspiciatis quae
            quibusdam ratione repudiandae sed similique sint sunt tempore ullam
            velit veniam vitae! Assumenda blanditiis debitis doloribus ea, eaque
            eligendi ex facere id illum iste maiores maxime non pariatur
            praesentium quae quod repellendus rerum totam ullam veritatis!
            Alias, aperiam atque autem corporis dolore et ex excepturi
            exercitationem facilis illo inventore ipsam laborum mollitia neque
            nesciunt nisi non numquam, obcaecati officia perferendis possimus
            quos repellat reprehenderit ut velit! Ad amet at cupiditate
            excepturi fugit ipsa pariatur quidem repellat? A atque dolores
            impedit minus officia quis recusandae sit soluta, ut? Aliquam
            aperiam asperiores atque beatae deserunt ducimus, ea eaque eius eos
            fugit ipsam mollitia nam quibusdam soluta temporibus. Amet
            consectetur dolorem doloribus ex fuga impedit incidunt labore, magni
            minima natus nisi numquam odio quae quo quos ratione reprehenderit,
            rerum, sed soluta voluptatum? Accusamus accusantium aliquid autem
            consectetur cumque cupiditate, dolorem exercitationem fugiat
            incidunt iusto magnam molestiae nulla odit, provident quasi
            recusandae reprehenderit. A cum eius exercitationem quas
            voluptatibus! A, accusamus adipisci at aut consequuntur, cupiditate
            debitis dolorem enim error esse eveniet ipsum maiores minus, nobis
            officia officiis quidem quo recusandae rem tenetur ut vero vitae
            voluptates! Accusantium aliquid deleniti deserunt dignissimos
            distinctio dolore doloremque dolores doloribus eius eos eveniet ex
            fugit, harum id ipsa iste iure nesciunt nostrum obcaecati officiis
            omnis quisquam quod quos repellat sed temporibus veniam voluptates.
            Esse impedit libero necessitatibus officiis omnis saepe similique,
            veniam? A accusantium ad alias aliquid aperiam aut autem doloribus
            eos est explicabo in ipsum itaque minima minus natus placeat quaerat
            quia quidem quod, ratione recusandae sequi veniam! Architecto
            doloremque earum ex excepturi, facilis maiores modi omnis sint.
            Accusamus ad adipisci amet animi, aspernatur at distinctio dolorem
            dolorum eaque earum eligendi et eum explicabo fuga harum id illo in
            itaque minima minus mollitia nihil nobis nulla praesentium provident
            quae quam quisquam ratione sapiente sint soluta suscipit temporibus
            totam! Aliquam illum inventore minima, nesciunt sint unde!
            Accusantium ad assumenda atque aut beatae dolorem doloribus eius
            enim excepturi harum minima, nesciunt, odio odit quia quidem quos,
            recusandae repellendus suscipit unde voluptas. Accusamus, aut autem
            facere magnam nam sapiente unde veniam. Deserunt iste odio rem.
            Blanditiis deleniti dolorem doloremque ducimus exercitationem,
            explicabo fugit incidunt ipsa laudantium minima nemo nihil
            repudiandae suscipit tenetur velit. Asperiores cum doloribus
            expedita id, ipsum laboriosam, libero modi molestiae, nulla qui quia
            saepe vitae voluptate! A esse harum, iusto nobis officiis omnis
            provident voluptates! Est et inventore repellat reprehenderit
            tempora. Asperiores blanditiis commodi earum eos esse eveniet,
            facere magnam, porro quasi reiciendis similique ut, velit veniam
            veritatis voluptatum! Asperiores commodi est exercitationem iste
            iusto necessitatibus praesentium recusandae voluptatum. Adipisci aut
            blanditiis, consequuntur corporis cumque ducimus fuga inventore
            ipsum iste neque, quae qui quo quod sed tempora veritatis, vitae
            voluptatem? Dignissimos excepturi inventore nostrum obcaecati sunt
            unde ut. A accusamus aperiam aut ducimus ea fugiat, in laborum
            maxime officiis possimus provident recusandae sapiente sint vero
            voluptates! Ad, aperiam assumenda blanditiis consequatur cupiditate
            deleniti dolorem dolores eaque excepturi explicabo in inventore
            itaque iusto magnam maiores molestiae, nesciunt odio perferendis
            placeat reiciendis reprehenderit sequi sint temporibus totam unde ut
            voluptas! Accusantium consectetur consequuntur dignissimos doloribus
            earum ipsam, molestiae necessitatibus nisi odit repellat sequi sunt
            voluptates? Animi assumenda cum cupiditate dolorem et eveniet
            facilis hic ipsam non suscipit. Aperiam autem blanditiis commodi
            cupiditate deleniti ducimus, est eveniet exercitationem facilis
            impedit praesentium quo sequi vel? Ad, animi at atque autem culpa
            cupiditate deleniti dolores facilis fugiat harum impedit molestias
            nostrum perferendis perspiciatis quasi rerum, tempora? Cumque enim
            error quod reiciendis! Dolore, nisi, voluptatibus! Eius praesentium
            rem tenetur. Ad commodi dolore ex molestiae nostrum quo
            reprehenderit. Alias aliquid asperiores aspernatur assumenda
            blanditiis dignissimos, distinctio ducimus et excepturi ipsum,
            labore, numquam quam qui repellat rerum ullam voluptas voluptatibus?
            At consequatur consequuntur deleniti, earum eos, eum ex fuga
            laudantium nesciunt nihil odio quis quod repellendus soluta tenetur
            totam veniam! Aut laborum libero maiores mollitia obcaecati quam
            quis suscipit voluptatem!
          </Text>
        </ScrollView>
        {_renderInteract()}
        {_renderContactModal()}
      </>
    </View>
  );
};

const formContainer = {
  width: '100%',
  height: '50@vs',
  paddingHorizontal: '15@ms',
  borderWidth: '1@ms',
  borderColor: Colors.borderTextInput,
  borderRadius: '5@ms',
  justifyContent: 'center',
  marginVertical: '5@vs',
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  list: {
    width: '100%',
    paddingHorizontal: '15@ms',
  },
  padding: {
    paddingBottom: '20@vs',
    paddingTop: '10@vs',
  },
  articleItem: {
    marginVertical: '3@vs',
  },
  image: {
    width: '100%',
    height: '160@vs',
    backgroundColor: Colors.topic.background,
    borderRadius: '20@ms',
  },
  title: {
    ...textStyle.h2_primary,
    color: Colors.secondary900,
    marginVertical: '10@vs',
  },
  content: {
    ...textStyle.md_black,
    textAlign: 'justify',
  },
  interactArea: {
    width: '100%',
    height: '50@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15@ms',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  likeIcon: {
    width: '30@ms',
    height: '30@ms',
  },
  likeText: {
    ...textStyle.sm_black,
    fontSize: '12@ms',
    marginLeft: '8@ms',
  },
  interactButton: {
    width: '40@ms',
    height: '40@ms',
    backgroundColor: Colors.primary,
    borderRadius: '20@ms',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10@ms',
  },
  interactIcon: {
    width: '20@ms',
    height: '20@ms',
  },
  chatModal: {
    width: '100%',
    height: '95%',
    backgroundColor: Colors.background,
    borderRadius: '20@ms',
    paddingTop: '50@ms',
  },
  contactUs: {
    ...textStyle.h1_primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  largeText: {
    ...textStyle.md_bold,
    fontSize: '17@ms',
    marginTop: '20@vs',
    marginBottom: '10@vs',
  },
  form: {
    ...formContainer,
  },
  largeForm: {
    ...formContainer,
    height: '220@ms',
    justifyContent: 'flex-start',
    paddingTop: '10@vs',
  },
  subjectTitle: {
    ...textStyle.md_black,
    fontSize: '12@ms',
  },
  topicName: {
    ...textStyle.md_black,
    color: Colors.textInput,
    marginTop: '3@vs',
  },
  input: {
    ...textStyle.md_black,
    color: Colors.textInput,
    paddingBottom: '10@vs',
  },
  sendMessageButton: {
    backgroundColor: Colors.secondary400,
    height: '45@vs',
    flexDirection: 'row',
    shadowColor: Colors.secondary400,
    shadowOpacity: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  sendMessageText: {
    ...textStyle.h3_black,
    fontSize: '17@ms',
    color: Colors.white,
    marginLeft: '10@ms',
  },
  blank: {
    height: '120@vs',
  },
  finishButton: {
    height: '45@vs',
    backgroundColor: Colors.primary400,
  },
  close: {
    position: 'absolute',
    top: '20@ms',
    right: '20@ms',
  },
});

export default ArticleDetailsScreen;
