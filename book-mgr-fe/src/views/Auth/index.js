// 提供一些配置项给vue
import { defineComponent, reactive, ref } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service'

export default defineComponent({
   components: {
      UserOutlined,
      LockOutlined,
      MailOutlined,
   },
   setup() {
      //注册用的表单数据
      const regForm = reactive({
         account: '',
         password: '',
      });

      const register = () => {
         auth.register(regForm.account, regForm.password);
      };

      return {
         regForm,

         register,
      };
   },
})