<?php
/**
 * Placeholder login view until (Tiny) Auth is simplemented.
 *
 */

$this->assign('title', 'Login');
?>

<div class="account-container stacked">
	<div class="content clearfix">

		<form action="DISABLED" method="post">

			<h1><?= __('Sign in') ?></h1>
			<div class="login-fields">
				<p><?= __('Unleash your box') ?></p>
				<div class="field">
					<label for="username"><?= __('Username') ?>:</label>
					<input type="text" id="username" name="username" value="" placeholder="<?= __('Username') ?>" class="form-control input-lg username-field" />
				</div>

				<div class="field">
					<label for="password"><?= __('Password') ?>:</label>
					<input type="password" id="password" name="password" value="" placeholder="<?= __('Password') ?>" class="form-control input-lg password-field"/>
				</div>
			</div>

			<div class="login-actions">
				<span class="login-checkbox">
					<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
					<label class="choice" for="Field"><?= __('Keep me signed in') ?></label>
				</span>
				<?php
                    echo $this->Html->link(
                        __('Sign in'),
                        ['controller' => 'Dashboards', 'action' => 'index'],
                        ['class' => 'login-action btn btn-primary']
                    );
                ?>
			</div>

		</form>

	</div> <!-- /content -->
</div> <!-- /account-container -->


<!-- Text Under Box -->
<div class="login-extra">
	Powered by <a href="http://www.cakephp.org">CakePHP 3</a><br/>
</div> <!-- /login-extra -->
